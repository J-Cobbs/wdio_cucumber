class Slider {
    get slider () {return $('#content > div > div > input[type=range]');}
    get number () {return $('#range');} 
}

module.exports = new Slider();