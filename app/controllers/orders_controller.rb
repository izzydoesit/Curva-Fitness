class OrdersController < ApplicationController

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
    params.require(:order).permit(:first_name, :last_name, :email, :address1, :address2, :city, :state, :zip_code, )
    end
end
