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

FactoryGirl.define do
  factory :user, aliases: [ :author ] do
    username "TestUser"
    password "password"
  end
end
