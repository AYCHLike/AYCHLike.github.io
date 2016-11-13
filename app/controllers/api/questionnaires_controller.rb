class Api::QuestionnairesController < ApplicationController
  def index
    @questionnaires = Questionnaire.all.includes(:questions)
  end

  def show
    @questionnaire = Questionnaire.includes(questions: { responses: :author }).find(params[:id])
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
