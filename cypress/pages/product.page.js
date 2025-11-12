import { productpageElements } from '../elements/productPage_elements';

export class ProductPage {

  very_product_on_product_page(product){
    cy.xpath(productpageElements.productMainSection).should("be.visible").and("include.text", product)
  }

  add_product_To_Cart(){
    cy.xpath(productpageElements.addToCartButton).should("be.visible").click()
  }
}