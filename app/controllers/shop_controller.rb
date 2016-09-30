class ShopController < ApplicationController

  before_action authenticate_user!, except: [:index]
  
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
    redirect_to action: :index
  end

  def clearCart
    session[:cart] = nil
    redirect_to action: :index
  end

  def index
    if session[:cart]
      @cart = session[:cart]
    else
      @cart = {}
    end
  end
end
