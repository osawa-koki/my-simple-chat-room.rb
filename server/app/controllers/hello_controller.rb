class HelloController < ApplicationController
  def greet
    name = params[:name]
    message = "Hello #{name}"
    render json: { message: message }
  end
end
