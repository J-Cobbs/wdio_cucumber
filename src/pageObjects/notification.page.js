class Notification {
    get hereBtn () {return $('#content > div > p > a');}
    get message () {return $('#flash');}
    
}

module.exports = new Notification();