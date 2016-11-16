require 'rails_helper'

RSpec.describe Api::QuestionnairesController do

  describe 'GET :index' do
    before { get :index, format: :json }

    it 'renders the index template' do
      expect(response).to render_template("index")
    end

    it 'returns a 200 status' do
      expect(response.status).to be(200)
    end
  end

  describe 'GET :show' do
    before do
      build_questionnaire_assoc
      questionnaire = Questionnaire.last
      get :show, format: :json, params: { id: questionnaire.id }
    end

    it 'renders the show template' do
      expect(response).to render_template("show")
    end

    it 'returns a 200 status' do
      expect(response.status).to be(200)
    end

    it 'eager loads questions' do
      expect(assigns(:questionnaire).association(:questions).loaded?).to be true
    end

    it 'eager loads responses' do
      expect(assigns(:questionnaire).questions[0].association(:responses).loaded?).to be true
    end

    it 'eager loads authors of responses' do
      expect(assigns(:questionnaire).questions[0].responses[0].association(:author).loaded?).to be true
    end
  end

  describe 'POST :create' do
    let(:question) { [{ name: "Name", label: "Label" }].to_json }
    
    before do
      user = create(:user)
      controller.log_in(user)
    end

    context 'with valid params' do
      before do
        questionnaire_params = { title: "Title", questions: question }
        post :create, format: :json, params: { questionnaire: questionnaire_params }
      end

      it 'renders the show template' do
        expect(response).to render_template("show")
      end

      it 'returns a 200 status' do
        expect(response.status).to be (200)
      end
    end

    context 'with invalid params' do
      before do
        questionnaire_params = { questions: question }
        post :create, format: :json, params: { questionnaire: questionnaire_params }
      end

      it 'renders the appropriate error message' do
        expect(json).to eq(["Title can't be blank"])
      end

      it 'returns a 422 status' do
        expect(response.status).to be(422)
      end
    end
  end
end
