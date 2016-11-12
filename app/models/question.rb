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

class Question < ApplicationRecord
  validates :name, :label, :questionnaire, presence: true
  validates :name, uniqueness: { scope: :questionnaire_id,
     message: "already exists in this questionnaire" }

  belongs_to :questionnaire

  has_many :responses

end
