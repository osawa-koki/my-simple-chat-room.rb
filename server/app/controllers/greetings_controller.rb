class GreetingsController < ApplicationController
  def greet
    http_method = request.method
    message = "Hello #{http_method}."
    render json: { message: message }
  end
end
