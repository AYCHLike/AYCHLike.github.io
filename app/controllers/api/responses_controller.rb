class Api::ResponsesController < ApplicationController
  def create
    # taking the sent up params and making a new instance for each, passing it into the factory
    responses = JSON.parse(response_params).map do |params|
      current_user.question_responses.new(body: params["body"], question_id: params["question_id"])
    end
    @responses = Response.create_responses(responses)
    if @responses[0].is_a?(String)
      render json: @responses, status: 422
      return
    else
      render :index
    end
  end

  private
  def response_params
    params.require(:responses)
  end
end
