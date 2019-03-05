var objHelpers = require('../PageObjects/helper').helper();
var PageElement = require('../PageElements/AllPages.js');

module.exports = { aboutme: aboutme };

function aboutme() {

    return {
        proceed,
        validate,
    }

    this.proceed = proceed;
    this.validate = validate;

    function proceed() {
        //clicking  change pictures button
        PageElement.objects.btnChangePic().click();
     
    }

    function validate() {
        var EC = protractor.ExpectedConditions;
        //default image validation , more can be added later on page url etc
        browser.wait(EC.visibilityOf(PageElement.objects.defaultImage()), 1000);

    }

}