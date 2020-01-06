internetPage = require('../pages/internet.page'); 

describe('Test element actions', function() {
    it('should click element' , () => {
        browser.url('/');
        internetPage.clickOnLink(); 
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest');
    })

    it('should get text' , () => {
        browser.url('/');
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing');
    })

    it('should click checkbox' , () => {
        internetPage.clickLink(6);
        internetPage.clickCheckBox(1);
        expect(internetPage.checkBox(1).isSelected()).equals(true);
    })

    it('should uncheck checkbox' , () => {
        internetPage.clickCheckBox(1);
        expect(internetPage.checkBox(1).isSelected()).equals(false);
    })

    it('should enter username' , () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterUserName('Julia');
        assert.equal('Julia', internetPage.username.getValue());
    })

    it('should enter password' , () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterPassword('password');
        assert.equal('password', internetPage.password.getValue());
    })

    it('should clear value' , () => {
        internetPage.username.click();
        internetPage.username.clearValue();
        assert.equal('', internetPage.username.getValue());
    })
})