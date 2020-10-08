class Frame {
    get iFrameBtn () {return $('#content > div > ul > li:nth-child(2) > a');}
    get iFrame () {return $('#mce_0_ifr');} 
    get title () {return $('#content > div > h3');}
    get textWindow () {return $('#tinymce');}
}

module.exports = new Frame();