class OutModal {
    get pageBody () {return $('body');}
    get modalWindow () {return $('#ouibounce-modal');}
    get closeWindow () {return $('#ouibounce-modal > div.modal > div.modal-footer > p');}
    
}

module.exports = new OutModal();