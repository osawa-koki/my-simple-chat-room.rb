require 'test_helper'

class HelloControllerTest < ActionDispatch::IntegrationTest
  test "should return hello message" do
    name = "hogehoge"
    get "/hello/#{name}"
    assert_response :success
    assert_equal({ message: "Hello #{name}" }.to_json, response.body)
  end
end
