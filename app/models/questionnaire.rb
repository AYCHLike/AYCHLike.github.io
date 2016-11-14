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
        # Saving the questionnaire and each question, and if anything is invalid, it'll
        # throw an exception, roll back the transaction, and we'll catch the exception
        # and render the invalid record's errors in the controller action
        questionnaire.save!
        questions.each do |question_params|
          question = questionnaire.questions.new(name: question_params["name"], label: question_params["label"])
          question.save!
        end
      end
    rescue ActiveRecord::RecordInvalid => e
      return e.record.errors.full_messages
    end
    nil
  end
end
