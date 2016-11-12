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

require 'rails_helper'

RSpec.describe Question, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
