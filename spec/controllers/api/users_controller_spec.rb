require 'rails_helper'

RSpec.describe Api::UsersController do

  describe 'POST create' do

    context 'with valid params' do
      before do
        user = { username: "username", password: "password" }
        post :create, format: :json, params: { user: user }
      end

      it 'renders the show template' do
        expect(response).to render_template("show")
      end

      it 'logs in the user' do
        user = User.find_by_username("username")
        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'returns a 200 status' do
        expect(response.status).to be(200)
      end
    end

    context 'with invalid params' do
      before do
        user = { username: "username", password: "short" }
        post :create, format: :json, params: { user: user }
      end

      it 'renders the appropriate errors' do
        expect(json).to eq(["Password is too short (minimum is 6 characters)"])
      end

      it 'returns a 422 status' do
        expect(response.status).to be(422)
      end
    end
  end

end
