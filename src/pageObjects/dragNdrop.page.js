class Dragdrop {
    get positionA () {return $('#column-a');}
    get targetA () {return $('#column-b');}
    get positionB () {return $('#column-b');}
    get targetB () {return $('#column-a');}
    get headerB () {return $('#column-b > header');}
    get headerA () {return $('#column-a > header');}
    
}

module.exports = new Dragdrop();