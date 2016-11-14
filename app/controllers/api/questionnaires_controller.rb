class Api::QuestionnairesController < ApplicationController
  def index
    # I'm going to be storing all of the relevant info for each questionnaire in the redux store from the get go,
    # so it makes sense to eager load everything when I fetch the questionnaires and include it all in the jbuilder view
    @questionnaires = Questionnaire.includes(questions: { responses: :author }).all
  end

  def show
    @questionnaire = Questionnaire.includes(questions: { responses: :author }).find(params[:id])
  end

  def create
    questionnaire = current_user.authored_questionnaires.new(title: questionnaire_params[:title])
    questions = JSON.parse(questionnaire_params[:questions])
    # Factory method for building a questionnaire and associated questions, check it out in the model
    invalid = Questionnaire.build_questionnaire(questionnaire, questions)
    if invalid
      render json: invalid, status: 422
      return
    end
    @questionnaire = Questionnaire.includes(questions: { responses: :author }).last
    render :show
  end

  private
  def questionnaire_params
    params.require(:questionnaire).permit(:title, :questions)
  end

end
