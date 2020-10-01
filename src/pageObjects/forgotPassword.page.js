class Retrieve {
    get inputField () {return $('#email');}
    get formCTA () {return $('#form_submit');} 
    get formMessage () {return $('#content');}   
}

module.exports = new Retrieve();