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

  describe 'associations' do
    it { is_expected.to have_many(:responses) }
    it { is_expected.to belong_to(:questionnaire)}
  end

  describe 'validations' do
    let!(:author) { build(:user) }
    let!(:questionnaire) { build(:questionnaire, author: author) }
    let!(:question) { create(:question, questionnaire: questionnaire) }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:label) }
    it { is_expected.to validate_presence_of(:questionnaire) }
    it { is_expected.to validate_uniqueness_of(:name).scoped_to(:questionnaire_id)
    .with_message("can only occur once per questionnaire") }
  end
end
