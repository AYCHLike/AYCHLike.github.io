require 'rails_helper'

RSpec.describe Api::SessionsController do

  describe 'POST :create' do
    before { create(:user) }

    context 'with valid params' do
      before do
        user_params = { username: "TestUser", password: "password" }
        post :create, format: :json, params: { user: user_params }
      end

      it 'logs in the user' do
        user = User.find_by_username("TestUser")

        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'renders the user show template' do
        expect(response).to render_template('api/users/show')
      end

      it 'returns a 200 response' do
        expect(response.status).to be(200)
      end
    end

    context 'with invalid params' do
      before do
        user_params = { username: "TestUser", password: "passwordd" }
        post :create, format: :json, params: { user: user_params }
      end

      it 'renders the appropriate error message' do
        expect(json).to eq(["Invalid credentials"])
      end

      it 'returns a 422 status' do
        expect(response.status).to be(422)
      end
    end
  end

  describe 'DELETE :destroy' do
    before do
      user = create(:user)
      controller.log_in(user)
      @session_token = user.session_token
    end

    it "logs out the current user" do
      delete :destroy

      expect(session[:session_token]).to be_nil

      user = User.find_by_username("TestUser")
      
      expect(user.session_token).not_to eq(@session_token)
    end
  end
end
