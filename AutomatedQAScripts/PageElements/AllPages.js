module.exports = {
    objects: {

       // more can added to increase the test suite
        defaultImage: function () {
             return element(by.xpath("//img[@src='../../assets/images/avatar-1.png']")) },
        imgAvatar2: function () {
                return element(by.xpath("//img[@src='../../assets/images/avatar-2.png']")) },
        btnChangePic: function () { return element(by.xpath("//div[@class='button']")) },
        btnChangeSave: function () { return element(by.xpath(" //button[contains(text(),'Save')]")) },
        
    }
};