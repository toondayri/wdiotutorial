internetPage = require('../pages/internet.page');

describe('Scroll to element',() => {
    it('should scroll to the footer', () => {
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.scrollToPageFooter();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    })
})