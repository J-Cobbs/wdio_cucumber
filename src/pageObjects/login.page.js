class Login {
    get emailInput () {return $('#username');}
    get passwordInput () {return $('#password');} 
    get logInBtn () {return $('#login > button');}
    get logOutBtn () {return $('#content > div > a');}
    get flashError () {return $('#flash');} 
}

module.exports = new Login();