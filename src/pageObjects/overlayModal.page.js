class Modal {
    get entryAdUrl () {return $('#content > ul > li:nth-child(15) > a');}
    get modalWindow () {return $('#modal');}
    get closeWindow () {return $('#modal > div.modal > div.modal-footer > p');}
    
}

module.exports = new Modal();