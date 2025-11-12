import { homepageElements } from "../elements/homePage_elements";
export class HomePage {
  visit() {
    cy.visit("/");
    cy.reload()
    cy.xpath(homepageElements.homePageLogo).should("be.visible");
    cy.xpath(homepageElements.homePage_mainHeader).should("be.visible");
  }

  manageAgeConsent(consent) {
    cy.xpath(homepageElements.agePopup).should("be.visible");
    cy.xpath(homepageElements.manageAgePopupBtn(consent))
      .should("be.visible")
      .click();
    if (consent == "exit") {
      cy.xpath(homepageElements.restrictionPopup)
        .should("be.visible")
        .contains("text", "You are not old enough to view the site");
    }
    cy.xpath(homepageElements.subscriptionPopupCloseIcon)
      .should("be.visible")
      .click();
  }
  search_and_open_product(productName) {
    cy.xpath(homepageElements.searchIcon).should("be.visible").click();
    cy.xpath(homepageElements.searchInput)
      .should("be.visible")
      .type(productName);
    cy.xpath(homepageElements.searchedProduct)
      .should("be.visible")
      .and("include.text", productName)
      .click();
  }
}
