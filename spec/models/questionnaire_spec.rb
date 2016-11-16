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

require 'rails_helper'

RSpec.describe Questionnaire, type: :model do
  let!(:author) { create(:user) }

  describe '::build_questionnaire' do
    let!(:questionnaire) { build(:questionnaire, author: author) }
    let!(:question) { build(:question, questionnaire: questionnaire) }

    it 'saves the questionnaire and questions' do
      expect do
         Questionnaire.build_questionnaire(questionnaire, [question])
       end.to change{ Questionnaire.count }.by(1).and change{ Question.count }.by(1)
    end
  end

  describe 'associations' do
    it { is_expected.to have_many(:questions)}
    it { is_expected.to belong_to(:author)}
  end

  describe 'validations' do
    let!(:questionnaire) { create(:questionnaire, author: author) }

    it { is_expected.to validate_presence_of(:author) }
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title).scoped_to(:author_id).with_message("already exists")}
  end
end
