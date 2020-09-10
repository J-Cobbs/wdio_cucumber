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