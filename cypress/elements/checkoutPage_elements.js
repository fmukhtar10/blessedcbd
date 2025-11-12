const checkoutpageElements = {
    checkOutMainPage: '//main[@id="checkout-main"]',
    emailInput: '//input[@id="email"]',
    firstNameInput: '//input[@placeholder="First name (optional)"]',
    lastNameInput: '//input[@placeholder="Last name"]',
    shippingAddress1Input: '//input[@id="shipping-address1"]',
    appartmentInput: '//input[@placeholder="Apartment, suite, etc. (optional)"]',
    cityInput: '//input[@placeholder="City"]',
    postcodeInput: '//input[@placeholder="Postcode"]',
    saveShippingInfoChecbox: '//input[@id="save_shipping_information"]',
    orderSummaryOnCheckOutPage: '//h2[text()="Order summary"]//parent::div',
    addressesList: '//ul[@id="shipping-address1-options"]',
    cardNumberInput: '//div[@class="current-field"]//input[@autocomplete="cc-number"]',
    cardExpiryInput: '//div[@class="current-field"]//input[@autocomplete="cc-exp"]',
    cardSecurityInput: '//div[@class="current-field"]//input[@autocomplete="cc-csc"]',
    nameOnCardLable: '//div[@class="current-field"]//input[@autocomplete="cc-name"]',
    placeYourOrderButton: '//button[@id="checkout-pay-button"]',
    checkoutProcessingError: '//div[@id="PaymentErrorBanner"]'
}

export {checkoutpageElements}