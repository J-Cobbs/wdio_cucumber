class JSAlerts {
    get firtsBtn () {return $('#content > div > ul > li:nth-child(1) > button');}
    get secBtn () {return $('#content > div > ul > li:nth-child(2) > button');}
    get thirdBtn () {return $('#content > div > ul > li:nth-child(3) > button');}
    get resultsText () {return $('#result');}
}

module.exports = new JSAlerts();