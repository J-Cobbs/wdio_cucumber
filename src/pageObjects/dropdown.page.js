class Dropdown {
    get dropOpt () {return $('#dropdown');}
    get firstpOpt () {return $('#dropdown > option:nth-child(2)');}
    get secOpt () {return $('#dropdown > option:nth-child(3)');}
}

module.exports = new Dropdown();