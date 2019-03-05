module.exports = { helper: helper };

function helper() {

    return {
        getUrl,
    
    }

    this.getUrl = getUrl;
    
    function getUrl(url) {
        browser.get(url);
        //browser.manage().window().setSize(1600, 800);
        browser.sleep(1500);
    }

}