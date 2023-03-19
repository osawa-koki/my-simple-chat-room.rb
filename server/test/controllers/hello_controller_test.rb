require 'test_helper'

class HelloControllerTest < ActionDispatch::IntegrationTest
  data = ["hogehoge", "fugafuga", "piyopiyo"]

  data.each do |name|
    test "should return hello message for #{name}" do
      get "/hello/#{name}"
      assert_response :success
      assert_includes response.body, "Hello #{name}"
    end
  end
end
