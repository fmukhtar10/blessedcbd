import { cartpageElements } from '../elements/cartPage_elements';

export class CartPage {

  proceedToCheckout(product){
    cy.xpath(cartpageElements.cartDrawer).should("be.visible")
    cy.xpath(cartpageElements.listOfCartItems).should("be.visible").and("include.text", product)
    cy.xpath(cartpageElements.cartFooter).should("be.visible")
    cy.xpath(cartpageElements.checkoutButton).scrollIntoView()
    .should("be.visible")
    .click()
  }
}