var objHelpers = require('../PageObjects/helper').helper();
var PageElement = require('../PageElements/AllPages.js');

module.exports = { changepic: changepic };

function changepic() {

    return {
        proceed,
        validate,
        Cancel
    }

    this.proceed = proceed;
    this.validate = validate;

    function proceed() {

        //browser.takeScreenshot().then(function (png) { objHelpers.writeScreenShot(png, 'C:\\Protractor\\CEI\\CEI\\Screenshots\\submitCEI.png'); });
        PageElement.objects.imgAvatar2().click();
        PageElement.objects.btnChangeSave().click();

    }

    function Cancel() {

     // add code to cancel

    }

    function validate() {
        // default background is missing anf not always selected ;bug needs to confirmed before code is written
        //validatr default image is selected
        // code to be added after confirming priority
        //
    }

 

   
}
