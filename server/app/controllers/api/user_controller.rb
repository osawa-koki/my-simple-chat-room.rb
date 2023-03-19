class Api::UserController < Api::ApiController
  def get
    @users = User.all
    render json: @users
  end
end
