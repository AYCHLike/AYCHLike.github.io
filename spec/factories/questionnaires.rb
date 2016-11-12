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

FactoryGirl.define do
  factory :questionnaire do
    title "MyString"
    author_id 1
  end
end
