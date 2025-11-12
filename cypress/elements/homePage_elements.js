const homepageElements = {
    homePage_mainHeader: '//header[contains(@class, "new_main_header")]',
    homePageLogo: '//div[contains(@class, "new_logo")]/a',
    searchInput: '//input[@id="searchInput"]',
    searchIcon: '//*[@class="icon icon-search"]//parent::div',
    searchedProduct: '//div[@id="searchedProducts"]',
    agePopup: '//div[@id="age-popup"]',
    manageAgePopupBtn: (text) => `//div[@id="age-popup"]//button[@class="${text}-btn"]`,
    enterBtnOnAgePopup: '//div[@id="age-popup"]//button[@class="exit-btn"]',
    restrictionPopup: '//div[@id="restricted-popup"]',
    subscriptionPopupCloseIcon: '//button[@class="close_popup"]' 
}

export {homepageElements}