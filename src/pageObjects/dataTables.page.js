class Table {
    get firstNameCol () {return $('#table1 > thead > tr > th:nth-child(2) > span');}
    get emailNameCol () {return $('#table2 > thead > tr > th:nth-child(3)');}
    get firstNameRow () {return $('#table1 > tbody > tr:nth-child(1) > td:nth-child(2)');}
    get emailNameRow () {return $('#table2 > tbody > tr:nth-child(1) > td.email');}
    
    
}

module.exports = new Table();

