class CartsController < ApplicationController

  before_action :authenticate_user!

  def add
    id = params[:id]
    if session[:cart]
      cart = session[:cart]
    else
      session[:cart] = {}
      cart = session[:cart]
    end

    if cart[id]
      cart[id] = cart[id] + 1
    else
      cart[id] = 1
    end
    redirect_to action: :show
  end

  def remove
    id = params[:id]
    if session[:cart]
      cart = session[:cart]
    else
      session[:cart] = {}
      cart = session[:cart]
    end

    if cart[id] > 1
      cart[id] = cart[id] - 1
    else
      cart.delete(id)
    end
    redirect_to action: :show
  end

  def clearCart
    session[:cart] = nil
    redirect_to action: :show
  end

  def show
    @order_items = current_order.order_items
    
    if session[:cart]
      @cart = session[:cart]
    else
      @cart = {}
    end
  end

  def process_payment
    # Assume you have correct values assigned to the following variables:
   
    nonce = params[:nonce]
    location_id= ENV['SQUARE_LOCATION_ID']
    access_token = ENV['SQUARE_ACCESS_TOKEN']
    # AMOUNT = params[:total]

    # Setup authorization
    SquareConnect.configure do |config|
      config.access_token = access_token
    end

    transactions_api = SquareConnect::TransactionsApi.new

    request_body = {

      :card_nonce => nonce,

      # Monetary amounts are specified in the smallest unit of the applicable currency.
      # This amount is in cents. It's also hard-coded for $1, which is not very useful.
      :amount_money => {
        :amount => 100,
        :currency => 'USD'
      },

      # Every payment you process for a given business have a unique idempotency key.
      # If you're unsure whether a particular payment succeeded, you can reattempt
      # it with the same idempotency key without worrying about double charging
      # the buyer.
      :idempotency_key => SecureRandom.uuid
    }


    # The SDK throws an exception if a Connect endpoint responds with anything besides 200 (success).
    # This block catches any exceptions that occur from the request.
    begin
      resp = transactions_api.charge(location_id, request_body)
    rescue SquareConnect::ApiError => e
      raise "Error encountered while charging card: #{e.message}"
    end

    puts resp

    redirect_to :show
  end
end
