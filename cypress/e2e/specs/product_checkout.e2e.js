import { HomePage } from '../../pages/home.page';
import { ProductPage } from '../../pages/product.page'
import { CartPage } from '../../pages/cart.page';
import { CheckoutPage } from '../../pages/checkout.page';
import { testData } from '../../support/testData';
const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();


describe('User Purchase Flow', () => {
  
  it('User should complete purchase flow successfully', () => {
    homePage.visit();
    homePage.manageAgeConsent("enter")
    homePage.search_and_open_product(testData.product);
    productPage.very_product_on_product_page(testData.product)
    productPage.add_product_To_Cart();
    cartPage.proceedToCheckout(testData.product);
    checkoutPage.mockCheckout(testData);
  });
});
