# == Schema Information
#
# Table name: questions
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  label            :string           not null
#  questionnaire_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

FactoryGirl.define do
  factory :question do
    name "MyString"
    label "MyString"
    questionnaire_id 1
  end
end
