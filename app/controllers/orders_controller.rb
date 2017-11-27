class OrdersController < ApplicationController

  def create
    
    @current_order = current_order
    
    SquareConnect.configure do |config|
      # Configure OAuth2 access token for authorization: oauth2
      config.access_token = ENV['SQUARE_ACCESS_TOKEN']
    end
    transactions_api = SquareConnect::TransactionsApi.new
    
    amount = @current_order.total.to_i * 100
  
    request_body = {
      card_nonce: params["nonce"],
      amount_money: {
        amount: amount,
        currency: 'USD'
      },
      idempotency_key: SecureRandom.uuid
    }
    location_id = ENV['SQUARE_LOCATION_ID']
    begin
      resp = transactions_api.charge(location_id, request_body)
    rescue SquareConnect::ApiError => e
      Rails.logger.error("Error encountered while charging card:: #{e.message}")
      render json: {status: 400, errors: JSON.parse(e.response_body)["errors"]}
      return
    end

    transaction_id = resp.transaction.tenders[0].transaction_id
    charge_time = resp.transaction.created_at
    location_id = resp.transaction.location_id
    current_order.update_columns(
      transaction_id: transaction_id, 
      charged_at: charge_time, 
      location_id: location_id,
      order_status_id: 2
    )
    session[:order_id] = nil
    flash[:success] = "Your order has been placed!"
    redirect_to :root
  end

  def update
    @order.update(order_params)
    if @order.save
      redirect_to cart_path(@order)
    else
      render "carts/show"
    end
  end

  def destroy
  end

  private
    def order_params
    params.require(:order).permit(:first_name, :last_name, :email, :address1, :address2, :city, :state, :zip_code, :charged)
    end
end
