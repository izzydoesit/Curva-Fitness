class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_order, :current_quantity

  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  def current_quantity
    if !session[:order_id].nil?
      order = Order.find(session[:order_id])
      order.order_items.inject(0) { |qty, item| qty + item.quantity }
    else
      0
    end
  end
end
