import clearInputField from '../support/action/clearInputField';
import clickElement from '../support/action/clickElement';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
import deleteCookies from '../support/action/deleteCookies';
import dragElement from '../support/action/dragElement';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
import handleModal from '../support/action/handleModal';
import moveTo from '../support/action/moveTo';
import pause from '../support/action/pause';
import pressButton from '../support/action/pressButton';
import scroll from '../support/action/scroll';
import selectOption from '../support/action/selectOption';
import selectOptionByIndex from '../support/action/selectOptionByIndex';
import setCookie from '../support/action/setCookie';
import setInputField from '../support/action/setInputField';
import setPromptText from '../support/action/setPromptText';
import Checkboxes from '../pageObjects/checkboxes.page'
import Contextmenu from '../pageObjects/contextMenu.page'
import Dragdrop from '../pageObjects/dragNdrop.page'
import Dropdown from '../pageObjects/dropdown.page'
import Dynamic from '../pageObjects/dynamic_content.page'
import DynamiCon from '../pageObjects/dynamic_controls.page'
import Modal from '../pageObjects/overlayModal.page'
import OutModal from '../pageObjects/outbounce_modal.page'

const { When } = require('cucumber');

When('I select first checkbox', () => {
    Checkboxes.firstBox.click()
    //page selects second checkbox by default so clicking on second one is necessary
    Checkboxes.secBox.click() 
    }
);

When('I right click on hot-spot', () => {
    browser.pause(2000);
    Contextmenu.hotSpot.click({ button: 'right' })
    browser.execute('window.alert()');
    console.log(browser.isAlertOpen());
    browser.pause(2000);
    }
);

When('credentials are filled out', () => {
    browser.url('http://admin:admin@the-internet.herokuapp.com/digest_auth');
    browser.pause(2000);
    }
);

When('I drag box A to Box B', () => {
    const elementDragged = Dragdrop.positionA
    const elementDropped = Dragdrop.targetA
    elementDragged.dragAndDrop(elementDropped)
    //browser.pause(2000);
    }
);

When('I drag box B to Box A', () => {
    const elementDragged = Dragdrop.positionB
    const elementDropped = Dragdrop.targetB
    elementDragged.dragAndDrop(elementDropped)
    //browser.pause(2000);
    }
);

When('I click on dropdown list', () => {
    Dropdown.dropOpt.click()
    browser.pause(2000);
    }
);
When('the list is expanded', () => {
    Dropdown.secOpt.waitForDisplayed({ timeout: 2000 });
     
    }
);
When('I refresh page', () => {
    browser.refresh()
    browser.pause(2000);     
    }
);
When('I select a checkbox', () => {
    DynamiCon.checkbox.click()
    browser.pause(2000);
    DynamiCon.checkbox.isSelected();
    }
);

When('I press remove button', () => {
    DynamiCon.addRemoveBtn.click()
    browser.pause(2000);
    //DynamiCon.checkbox.waitForDisplayed({ timeout: 8000 })
    }
);
When('checkbox is not visible', () => {
    expect(DynamiCon.checkbox).toBeVisible(false)
    browser.pause(2000);
    }
);
When('I press add button', () => {
    DynamiCon.addRemoveBtn.click()
    browser.pause(2000);
});
When('Input field is disabled', () => {
    expect(DynamiCon.inputField).toBeDisabled()
    browser.pause(2000);
});
When('I press a button', () => {
    DynamiCon.enableBtn.click()
    DynamiCon.enableBtn.waitForDisplayed({ timeout: 5000 })
    browser.pause(2000); 
});
When('I select entry_ad page', () => {
    Modal.entryAdUrl.click()
    browser.pause(2000); 
});
When('I hover a mouse out of the page', () => {
    OutModal.pageBody.moveTo(-10, -10)
    browser.pause(2000); 
});