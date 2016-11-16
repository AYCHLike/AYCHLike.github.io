# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  admin           :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#

require 'rails_helper'

RSpec.describe User do

  describe 'authentication' do
    it 'does not save passwords' do
      create(:user, password: "unencrypted")
      user = User.find_by_username("TestUser")
      expect(user.password).to be_nil
    end

    it 'encrypts the password' do
      expect(BCrypt::Password).to receive(:create)
      build(:user)
    end

    it 'assigns a session token if not present' do
      user = build(:user)
      expect(user.session_token).not_to be_nil
    end

    it 'can search for user by credentials' do
      user = create(:user)
      found = User.find_by_credentials("TestUser", "password")
      expect(user.attributes).to eq(found.attributes)
    end
  end

  describe 'associations' do
    it { is_expected.to have_many(:authored_questionnaires) }
    it { is_expected.to have_many(:authored_questions).through(:authored_questionnaires) }
    it { is_expected.to have_many(:question_responses)}
  end

  describe 'validations' do
    let!(:user) { create(:user) }

    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_presence_of(:session_token) }
    it { is_expected.to validate_uniqueness_of(:username) }
    it { is_expected.to validate_uniqueness_of(:session_token) }

  end
end
