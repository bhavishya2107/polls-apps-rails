class PollsController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, only: [:create]

  def index
    @polls = Poll.all
    if @polls
      render status: :ok, json: {polls: @polls}
    else
      render status: :not_found, json: {errors: ["No polls found"]}
    end
  end

  def create
      @poll = Poll.new(poll_params)
      @poll.user_id = current_user.id
      if @poll.save
        render status: :ok, json: {notice: 'Poll was created successfully', poll: @poll}
      else
        render status: :unprocessable_entity, json: {errors: @poll.errors.full_messages}
  end
  end

  def show
    poll = Poll.find(params[:id])
    options = poll.options
    render status: :ok, json: { poll: poll, options: options}
  end

  private

  def poll_params
    params.require(:poll).permit(:question, options_attributes: [:name])
  end
  
end
