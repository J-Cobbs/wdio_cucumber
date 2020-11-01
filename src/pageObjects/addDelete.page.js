class addDelete {
    get addBtn () {return $('#content > div > button');}
    get removeBtn () {return $('#elements > button:nth-child(1)');}
    get browserBtn () {return $('#content > ul > li:nth-child(2) > a');}
}

module.exports = new addDelete();