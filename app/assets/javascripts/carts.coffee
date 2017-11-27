# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ -> 
  event.preventDefault()
  paymentFormLoaded()

  ccButton = $('#sq-creditcard').bind 'click', (event) =>
    this.clickHandler = -> alert 'clicked!'
    element.addEventListener "click", (e) => this.clickHandler(e)
    response = cardNonceResponseReceived(e);