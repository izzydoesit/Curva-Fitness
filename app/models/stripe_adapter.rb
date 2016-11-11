# require 'stripe'

# Stripe.api_key = "sk_test_ZqFkKvLmkh0W286o5gwEQWWk"

# # Get the credit card details submitted by the form
# token = params[:stripeToken]

# # Create a charge: this will charge the user's card
# begin
#   charge = Stripe::Charge.create(
#     :amount => 1000, # Amount in cents
#     :currency => "usd",
#     :source => token,
#     :description => "Example charge"
#   )
# rescue Stripe::CardError => e
#   # The card has been declined
# end

# class StripeAdaper
#   include HTTParty
#   include Stripe

#   base_uri 'https://api.stripe.com'

#   def initialize(key)
#     self.api_key = ENV['STRIPE_TEST_KEY']
#   end

#   def test_endpoint(endpoint)
#     self.class.get(endpoint, api_key)
#   end
# end