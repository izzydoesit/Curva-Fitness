require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get about" do
    get static_pages_about_url
    assert_response :success
  end

  test "should get blog" do
    get static_pages_blog_url
    assert_response :success
  end

  test "should get classes" do
    get static_pages_classes_url
    assert_response :success
  end

  test "should get ketogenics" do
    get static_pages_ketogenics_url
    assert_response :success
  end

  test "should get schedule" do
    get static_pages_schedule_url
    assert_response :success
  end

  test "should get store" do
    get static_pages_store_url
    assert_response :success
  end

  test "should get training" do
    get static_pages_training_url
    assert_response :success
  end

end
