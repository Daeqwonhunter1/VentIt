require 'test_helper'

class SubventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @subvent = subvents(:one)
  end

  test "should get index" do
    get subvents_url, as: :json
    assert_response :success
  end

  test "should create subvent" do
    assert_difference('Subvent.count') do
      post subvents_url, params: { subvent: { description: @subvent.description, image_url: @subvent.image_url, vent_title: @subvent.vent_title } }, as: :json
    end

    assert_response 201
  end

  test "should show subvent" do
    get subvent_url(@subvent), as: :json
    assert_response :success
  end

  test "should update subvent" do
    patch subvent_url(@subvent), params: { subvent: { description: @subvent.description, image_url: @subvent.image_url, vent_title: @subvent.vent_title } }, as: :json
    assert_response 200
  end

  test "should destroy subvent" do
    assert_difference('Subvent.count', -1) do
      delete subvent_url(@subvent), as: :json
    end

    assert_response 204
  end
end
