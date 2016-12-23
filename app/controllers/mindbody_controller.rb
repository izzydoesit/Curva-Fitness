

class MindbodyController < ApplicationController
  include MindBody

  def index
    # @mindbody = MindbodyAdapter.new
    # ap @mindbody.test_endpoint(:get_classes)
    response = MindBody::Services::ClientService.get_clients
    result = response.result
    ap result
  end
end