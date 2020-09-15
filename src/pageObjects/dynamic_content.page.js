class Dynamic {
    get rowOne () {return $('#content > div:nth-child(1)');}
    get rowTwo () {return $('#content > div:nth-child(4)');}
    get rowThree () {return $('#content > div:nth-child(7)');}
}

module.exports = new Dynamic();