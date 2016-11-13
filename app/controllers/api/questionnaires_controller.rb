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
    # Don't want to include author_id in the permitted params, so we'll use an
    # ActiveRecord association relation to supply that parameter
    @questionnaire = current_user.authored_questionnaires.new(questionnaire_params)

    if @questionnaire.save
      render :show
    else
      render json: @questionnaire.errors.full_messages, status: 422
    end
  end

  private
  def questionnaire_params
    params.require(:questionnaire).permit(:title)
  end
end
