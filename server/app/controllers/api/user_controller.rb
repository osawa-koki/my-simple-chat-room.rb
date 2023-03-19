class Api::UserController < Api::ApiController
  def get
    @users = User.all
    render json: @users
  end
  
  def post
    user = User.create(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:name, :age, :profession)
  end
end
