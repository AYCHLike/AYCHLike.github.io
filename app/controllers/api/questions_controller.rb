class Api::QuestionsController < ApplicationController
  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = current_user.authored_questions.new(question_params)

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render :show
  end

  private
  def question_params
    params.require(:question).permit(:name, :label)
  end
end
