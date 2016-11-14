# == Schema Information
#
# Table name: questionnaires
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Questionnaire < ApplicationRecord
  validates :title, :author, presence: true
  validates :title, uniqueness: { scope: :author_id, message: "already exists" }

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :questions

  def self.build_questionnaire(questionnaire, questions)
    begin
      ActiveRecord::Base.transaction do
        # Breaking out of the transaction and rendering errors if any validations fail
        questionnaire.save!
        # Going through once to check if everything passes validations, breaking out if they don't
        validated_questions = []
        questions.each do |question_params|
          question = questionnaire.questions.new(name: question_params["name"], label: question_params["label"])
          question.save!
        end
        # Then going through once more to save them
        # questionnaire.save
        # validated_questions.each { |question| question.save }
      end
    rescue ActiveRecord::RecordInvalid => e
      return e.record.errors.full_messages
    end
    nil
  end
end
