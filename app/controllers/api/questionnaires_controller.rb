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
    # if the submitted questionnaire has a title as necessary, we'll bundle up all of the
    # related questions into one transaction to save all of them, then we'll eager load
    # the newly saved questionnaire (complete with responses) and render it in the response
    if questionnaire.save
      Question.transaction do
        JSON.parse(questionnaire_params[:questions]).each do |question_params|
          questionnaire.questions.create!(name: question_params["name"], label: question_params["label"])
        end
      end
      @questionnaire = Questionnaire.includes(questions: { responses: :author }).last
      render :show
    else
      render json: @questionnaire.errors.full_messages, status: 422
    end
  end

  private
  def questionnaire_params
    params.require(:questionnaire).permit(:title, :questions)
  end

end
