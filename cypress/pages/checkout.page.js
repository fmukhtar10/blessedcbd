import { checkoutpageElements } from "../elements/checkoutPage_elements";

export class CheckoutPage {
  mockCheckout(testData) {
    cy.xpath(checkoutpageElements.checkOutMainPage).should("be.visible");
    cy.xpath(checkoutpageElements.emailInput).type(testData.userEmail, {delay: 50});
    cy.xpath(checkoutpageElements.firstNameInput).type(testData.FName, {delay: 50});
    cy.xpath(checkoutpageElements.lastNameInput).type(testData.LName, {delay: 50});
    cy.xpath(checkoutpageElements.shippingAddress1Input).type(testData.Street, {delay: 50});
    cy.xpath(checkoutpageElements.appartmentInput).type(testData.apartment, {delay: 50})
    cy.xpath(checkoutpageElements.cityInput).type(testData.city, {delay: 50})
    cy.xpath(checkoutpageElements.postcodeInput).type(testData.postcode, {delay : 50})
    // cy.xpath(checkoutpageElements.cardNumberInput).type(testData.CardNo)
    // cy.xpath(checkoutpageElements.cardExpiryInput).type(testData.CardExpiry)
    // cy.xpath(checkoutpageElements.cardSecurityInput).type(testData.CardSecurity)
    // cy.xpath(checkoutpageElements.nameOnCardLable).should("include.text", testData.FName + testData.LName)
    // cy.xpath(checkoutpageElements.placeYourOrderButton).should("be.enabled").click()
  }
}
