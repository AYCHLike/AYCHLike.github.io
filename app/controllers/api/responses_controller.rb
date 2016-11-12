class Api::ResponsesController < ApplicationController
  def show
    @response = Response.find(params[:id])
  end

  def create
    @response = current_user.question_responses.new(response_params)

    if @response.save
      render :show
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  private
  def response_params
    params.require(:response).permit(:body, :question_id)
  end
end
