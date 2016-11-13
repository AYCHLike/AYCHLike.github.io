class Api::QuestionsController < ApplicationController
  def create
    @question = current_user.authored_questions.new(question_params)

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private
  def question_params
    params.require(:question).permit(:name, :label)
  end
end
