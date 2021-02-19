class PollsController < ApplicationController
  def index
    @polls = Poll.all
    if @polls
      render status: :ok, json: {polls: @polls}
    else
      render status: :not_found, json: {errors: ["No polls found"]}
    end
  end

  def create
    if logged_in?
      @poll[:user_id] = current_user.id
      @poll = Poll.new(poll_params)
      if @poll.save
        render status: :ok, json: {notice: 'Poll was created successfully'}
      else
        render status: :unprocessable_entity, json: {errors: @poll.errors.full_messages}
      end
    end
  end

  private

  def poll_params
    params.require(:poll).permit(:title, :user_id, options_attributes: [:name])
  end
  
end
