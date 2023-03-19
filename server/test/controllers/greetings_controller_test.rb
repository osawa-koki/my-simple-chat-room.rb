require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get greet" do
    get greetings_greet_url
    assert_response :success
  end
end
