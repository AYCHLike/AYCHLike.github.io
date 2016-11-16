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

require 'rails_helper'

RSpec.describe Response do

  describe '::create_responses' do
    let!(:author) { create(:user) }
    let!(:questionnaire) { create(:questionnaire, author: author) }
    let!(:question) { create(:question, questionnaire: questionnaire) }
    
    it 'saves responses' do
      response = build(:response, author: author, question: question)
      responses = [response]

      expect{ Response.create_responses(responses)}.to change { Response.count }.by(1)
    end
  end

  describe 'associations' do
    it { is_expected.to belong_to(:author) }
    it { is_expected.to belong_to(:question) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:body) }
    it { is_expected.to validate_presence_of(:author) }
    it { is_expected.to validate_presence_of(:question) }
  end
end
