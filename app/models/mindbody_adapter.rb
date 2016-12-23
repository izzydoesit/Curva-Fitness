# require 'savon'

class MindbodyAdapter
  extend Savon::Model

  def initialize
    @endpoint = {wsdl: "https://api.mindbodyonline.com/0_5/ClassService.asmx?wsdl"}
    @site_ids = { 'int': -99 }
    @source_credentials = { 'SourceName': 'israeliTech', 'Password': ENV['MINDBODY_KEY'], 'SiteIDs': @site_ids }
    @user_credentials = { 'Username': 'Siteowner', 'Password': 'apitest1234', 'SiteIDs': @site_ids }
    @client = Savon.client(@endpoint)
    @request = { 'SourceCredentials': @source_credentials }
    @params = { 'Request': @request }
    @action = { 'SOAPAction': ""}
  end

  def test_endpoint(operation)
    # @client.call(operation, message: @request) 
    response = @client.call(operation, message: @request)
  end
end

# Operations provided by your service: [:get_classes, :update_client_visits, :get_class_visits, :get_class_descriptions, :get_enrollments, :get_class_schedules, :add_clients_to_classes, :remove_clients_from_classes, :add_clients_to_enrollments, :remove_from_waitlist, :get_semesters, :get_courses, :get_waitlist_entries, :substitute_class_teacher, :subtitute_class_teacher, :cancel_single_class]