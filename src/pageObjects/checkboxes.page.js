class Checkboxes {
    get firstBox () {return $$('#checkboxes input')[0];}
    get secBox () {return $$('#checkboxes input')[1];}
   
}

module.exports = new Checkboxes();