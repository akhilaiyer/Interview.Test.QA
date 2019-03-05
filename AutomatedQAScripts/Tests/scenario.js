var objHelpers = require('../PageObjects/helper').helper();
var PageElement = require('../PageElements/AllPages.js');
var objaboutme = require('../PageObjects/aboutme').aboutme();
var objchangepic = require('../PageObjects/changepic').changepic();


describe('update transaction',
    function() {

        beforeEach(function() {
            objHelpers.getUrl("http://localhost:4200");
        });
        
        it('Ability to save an user image ',
            function() {
            
                browser.sleep(1000);
                objaboutme.validate();
                // add code to count default avatar count =2 after confirming its a defect
                // let list = element.all(by.xpath("//img[@src='../../assets/images/avatar-1.png']"));
                // expect(list.count()).toBe(2);

                // change image click button
                objaboutme.proceed();
                // change and save image
                objchangepic.proceed();
        
                // validate
                
                let list = element.all(by.xpath("//img[@src='../../assets/images/avatar-2.png']"));
                expect(list.count()).toBe(2);
            });

         
         
    });