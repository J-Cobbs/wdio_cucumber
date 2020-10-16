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
import Upload from '../pageObjects/upload.page'
import Retrieve from '../pageObjects/forgotPassword.page'
import Login from '../pageObjects/login.page'
import Frame from '../pageObjects/iFrame.page'
import Slider from '../pageObjects/slider.page'
import Hover from '../pageObjects/hover.page'

const { When } = require('cucumber');
const path = require('path')

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
When('I pick example file from path', () => {
    const filePath = path.join('/Users/jakublewandowski/Desktop/example_file.txt');
    const remoteFilePath = browser.uploadFile(filePath);
    Upload.fileUpload.setValue(remoteFilePath);
    Upload.fileSubmit.click()    
});
When('I fill in valid password', () => {
    Retrieve.inputField.setValue('test@test.com')
});
When('I submit request by pressing cta', () => {
    Retrieve.formCTA.click()
    browser.pause(2000);
});
When('I fill in invalid username', () => {
    Login.emailInput.setValue('test@test.com')
    browser.pause(2000);
});
When('I fill any credentials in password field', () => {
    Login.passwordInput.setValue('p455w0rD')
    Login.logInBtn.click()
    browser.pause(2000);
});
When('I fill in valid username', () => {
    Login.emailInput.setValue('tomsmith')
    browser.pause(2000);
});
When('I fill valid credentials in password field', () => {
    Login.passwordInput.setValue('SuperSecretPassword!')
    Login.logInBtn.click()
    browser.pause(2000);
});
When('I switch to iFrame', () => {
    Frame.title.waitForDisplayed(3000)
    browser.switchToFrame(Frame.iFrame)

});
When('I click slider on particular position', () => {
    Slider.slider.getLocation();
    console.log("----> location above <----")
    Slider.slider.moveTo(115, 163)
    Slider.slider.click({x: 30})
    browser.pause(2000);
});
When('I hover on particular picture', () => {
    //Hover.user1.getLocation();
    //Hover.user2.getLocation();
    //Hover.user3.getLocation();
    //console.log("----> location above <----")
    Hover.user1.moveTo( 115, 132 )
})