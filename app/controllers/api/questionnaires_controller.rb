class Api::QuestionnairesController < ApplicationController
  def index
    @questionnaires = Questionnaire.all.includes(:questions)
  end

  def show
    if current_user.admin
      # If the current user is an admin, we're eager loading the responses and the usernames of the respondents
      @questionnaire = Questionnaire.find(params[:id]).includes(questions: { responses: { author: :username}})
    else
      @questionnaire = Questionnaire.find(params[:id]).includes(:questions)
    end
  end

  def create
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
