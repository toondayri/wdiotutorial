class Internet {
    get pageHeader(){
        return $('h1.heading');
    }

    get subHeading(){
        return $('h2');
    }

    get pageFooter(){
        return $('#page-footer');
    }

    get parent(){
        return $('ul'); 
    }

    get childElements(){
        return this.parent.$$('li');
    }

    get firstLink(){
        return $('ul > li:nth-child(1) a');
    }

    get h3Header(){
        return $('h3');
    }

    get username(){
        return $('#username');
    }

    get password(){
        return $('#password');
    }

    get target(){
        return $('.example #target');
    }

    get result(){
        return $('.example #result');
    }

    scrollToPageFooter(){
        this.pageFooter.moveTo();
    }

    clickTarget(){
        this.target.waitForDisplayed();
        this.target.click();
    }

    sendKeysToTarget(text){
        this.target.waitForDisplayed();
        this.target.keys(text);
    }

    getResultText(){
        this.result.waitForDisplayed();
        return this.result.getText();
    }

    figures(index){
        return $(`.example .figure:nth-child(${index}) img`);
    }

    figureDetails(index){
        return $(`.example .figure:nth-child(${index}) .figcaption h5`)
    }

    hoverOnFigure(index){
        this.figures(index).waitForDisplayed();
        this.figures(index).moveTo(1,1);
    }

    getFigureDetailsText(index){
        this.figureDetails(index).waitForDisplayed();
        return this.figureDetails(index).getText();
    }

    enterUserName(text){
        this.username.waitForDisplayed(); 
        this.username.setValue(text);
    }

    enterPassword(text){
        this.password.waitForDisplayed(); 
        this.password.setValue(text);
    }

    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`);
    }

    getLiText(){
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    getSpecificElementText(index){
        this.specificChildElement(index).waitForDisplayed();
        return this.specificChildElement(index).getText();
    }

    clickOnLink(){
        if(this.firstLink.isDisplayed() === true){
            this.firstLink.click();
        }
        this.h3Header.waitForDisplayed();
    }

    clickLink(index){
        this.link(index).waitForDisplayed(); 
        this.link(index).click();
    }

    link(index){
        return $(`ul > li:nth-child(${index}) a`);
    }

    checkBox(index){
        return $(`#checkboxes input:nth-child(${index})`);
    }

    clickCheckBox(index){
        this.checkBox(index).waitForDisplayed(); 
        this.checkBox(index).click();
    }
}
module.exports = new Internet(); 