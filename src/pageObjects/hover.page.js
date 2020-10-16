class Hover {
    get user1 () {return $('#content > div > div:nth-child(3)');}
    get user2 () {return $('#content > div > div:nth-child(4)');}
    get user3 () {return $('#content > div > div:nth-child(5)');}
    get profile1 () {return $('#content > div > div:nth-child(3) > div > a');}
    get profile2 () {return $('#content > div > div:nth-child(4) > div > a');}
    get profile3 () {return $('#content > div > div:nth-child(5) > div > a');} 
}

module.exports = new Hover();