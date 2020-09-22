class DynamiCon {
    get checkbox () {return $('#checkbox > input[type=checkbox]');}
    get addRemoveBtn () {return $('#checkbox-example > button');}
    get message () {return $('#message');}
    get enableBtn () {return $('#input-example > button');}
    get inputField () {return $('#input-example > input[type=text]');}
    
}

module.exports = new DynamiCon();