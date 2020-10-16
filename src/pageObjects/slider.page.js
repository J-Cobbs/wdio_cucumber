class Slider {
    get slider () {return $('#content > div > div > input[type=range]');}
    get number () {return $('#range');} 
    //get title () {return $('#content > div > h3');}
    //get textWindow () {return $('#tinymce');}
}

module.exports = new Slider();