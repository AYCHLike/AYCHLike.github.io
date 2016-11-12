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

FactoryGirl.define do
  factory :response do
    body "MyString"
    author_id 1
    question_id 1
  end
end
