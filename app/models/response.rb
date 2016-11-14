# == Schema Information
#
# Table name: responses
#
#  id          :integer          not null, primary key
#  body        :string           not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Response < ApplicationRecord
  validates :body, :author, :question, presence: true

  belongs_to :question

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  def self.create_responses(responses)
    saved_responses = []
    begin
      ActiveRecord::Base.transaction do
        responses.each do |response|
          response.save!
          saved_responses << response
      end
    end
    rescue ActiveRecord::RecordInvalid => e
      return e.record.errors.messages.map { |attr, msg| "Response " + msg[0] }
    end
    saved_responses
  end
end
