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
end
