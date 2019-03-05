

// var HtmlReporter = require("protractor-angular-screenshot-reporter");
exports.config = {
    // The address of a running selenium server. 
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.13.0.jar',
    

    //Capabilities to be passed to the webdriver instance. 
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['Tests/scenario.js'],
    // Options to be passed to Jasmine-node. 
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 150000
    },
    //onPrepare: function() {
        //// jasmine.getEnv().addReporter(new HtmlReporter({
        /// baseDirectory: '/Protractor/CEI/CEI/TestResults'         
     //// }).getJasmine2Reporter());
   //}
};