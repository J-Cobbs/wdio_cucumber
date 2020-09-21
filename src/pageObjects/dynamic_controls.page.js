class DynamiCon {
    get checkbox () {return $('#checkbox > input[type=checkbox]');}
    get addRemoveBtn () {return $('#checkbox-example > button');}
    get message () {return $('#message');}
}

module.exports = new DynamiCon();