import checkClass from '../support/check/checkClass';
import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkEqualsText from '../support/check/checkEqualsText';
import checkFocus from '../support/check/checkFocus';
import checkInURLPath from '../support/check/checkInURLPath';
import checkIsOpenedInNewWindow from
    '../support/check/checkIsOpenedInNewWindow';
import checkModal from '../support/check/checkModal';
import checkModalText from '../support/check/checkModalText';
import checkNewWindow from '../support/check/checkNewWindow';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkFontProperty from '../support/check/checkFontProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkTitleContains from '../support/check/checkTitleContains';
import checkURL from '../support/check/checkURL';
import checkURLPath from '../support/check/checkURLPath';
import checkWithinViewport from '../support/check/checkWithinViewport';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isExisting from '../support/check/isExisting';
import isVisible from '../support/check/isDisplayed';
import waitFor from '../support/action/waitFor';
import waitForVisible from '../support/action/waitForDisplayed';
import checkIfElementExists from '../support/lib/checkIfElementExists';
import Checkboxes from '../pageObjects/checkboxes.page'
import bOauth from '../pageObjects/basic_oauth.page'
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
import JQuery from '../pageObjects/JQueryUI.page'
import JSAlerts from '../pageObjects/javaScriptAlerts.page'
import Interaction from '../pageObjects/keyPress.page'
import Tab from '../pageObjects/newTab.page'

const { Then } = require('cucumber');

Then('first checkbox is marked', () => {
    const firstcheckbox = Checkboxes.firstBox
    expect(firstcheckbox).toBeSelected()
    browser.pause(2000)
  });

  Then('pop-up alert appears', () => {
    browser.execute('window.alert()');
    console.log(browser.isAlertOpen());
    browser.pause(2000);
    }    
  );

  Then('I can dismiss alert by pressing OK', () => {
      browser.acceptAlert()
  });

  Then('I am successfully logged in to digest auth page', () => {
    const info = bOauth.text
    expect(info).toBeDisplayed('Congratulations! You must have the proper credentials.')
    console.log(info)
});

Then("box A changed it's position", () => {
    const headA = Dragdrop.headerA
    expect(Dragdrop.headerA).toHaveText('A')
    //const log = expect(headA).toHaveText('A')
    //console.log(JSON.parse(JSON.stringify(headA)))
    console.log('Box A header is:' + headA)
});

Then("box B changed it's position", () => {
    const headB = Dragdrop.headerB
    expect(Dragdrop.headerB).toHaveText('B')
    console.log('Box A header is:' + headB)
});
Then("I can select option 2", () => {
    Dropdown.secOpt.click()
    const option = Dropdown.secOpt.getText();   
    expect(Dropdown.secOpt).toBeDisplayed()
    console.log('Chosen option is ' + option);
    browser.pause(2000);
});

Then("Content has changed", () => {
    const rowOne = Dynamic.rowOne.getText();
    console.log('First row is ' + rowOne);
    const rowTwo = Dynamic.rowTwo.getText();
    console.log('Second row is ' + rowTwo);
    const rowThree = Dynamic.rowThree.getText();
    console.log('Third row is ' + rowThree);
    //didn't have idea how to make better test
    //so it may be run twice and compared what's logged for now
});

Then("checkbox is gone", () => {
    const checkbox = DynamiCon.checkbox
    checkbox.waitForDisplayed({ timeout: 5000 })
    expect(DynamiCon.checkbox).toBeVisible(false)
    browser.pause(5000);
});

Then("checkbox is visible", () => {
    expect(DynamiCon.checkbox).toBeVisible()
    browser.pause(2000);
});


Then("I have message displayed", () => {
    const messageOne = DynamiCon.message
    if (messageOne === "It's gone!") {
        console.log("It's gone!")
    } else {
        console.log("It's back!")
    }
});
Then("input field is enabled", () => {
    const field = DynamiCon.inputField
    field.waitForDisplayed({ timeout: 5000 })
    expect(DynamiCon.inputField).toBeEnabled()
    browser.pause(2000);
});
Then("I can type any text", () => {
    DynamiCon.inputField.addValue("I'm trying do my best")
    browser.pause(2000);
});
Then("Input field is disabled again", () => {
    expect(DynamiCon.inputField).toBeDisabled()
    browser.pause(2000);
});
Then("modal window appears", () => {
    const modal = Modal.modalWindow
    modal.waitForDisplayed({ timeout: 3000 });
    browser.isAlertOpen()
    console.log("===========>" + browser.isAlertOpen())
    browser.pause(2000);
});
Then("I can close that window", () => {
    const close = Modal.closeWindow
    Modal.modalWindow.waitForDisplayed({ timeout: 3000 });
    browser.isAlertOpen()
    close.click()
    browser.refresh()
});
Then("modal doesn't appear", () => {
    browser.refresh()
    browser.refresh()
    browser.isAlertOpen()
    console.log("===========>" + browser.isAlertOpen())
});
Then("outbounce modal window appears", () => {
    //const modal = OutModal.modalWindow
    OutModal.modalWindow.waitForDisplayed({ timeout: 3000 });
    browser.isAlertOpen()
    console.log("===========>" + browser.isAlertOpen())
    browser.pause(2000);
});
Then("file gonna be uploaded", () => {
    Upload.fileUploaded.waitForDisplayed({ timeout: 5000 })
    expect(Upload.fileUploaded).toBeDisplayed('File Uploaded!')
    browser.pause(2000);
});
Then("email is sent and I have proper message", () => {
    Retrieve.formMessage.waitForDisplayed({ timeout: 3000 })
    expect(Retrieve.formMessage).toHaveText("Your e-mail's been sent!")
    expect(browser).toHaveUrl('http://the-internet.herokuapp.com/email_sent')
    console.log("here ===========>" + Retrieve.formMessage.getText())
    browser.pause(2000);
});
Then("banner appears on top of the page", () => {
    Login.flashError.waitForDisplayed({ timeout: 3000 })
    if (Login.flashError === "You logged into a secure area!") {
        expect(Login.flashError).toBeDisplayed("You logged into a secure area!")
        //console.log(Login.flashError)
    } else {
        expect(Login.flashError).toBeDisplayed("Your username is invalid!")
        //console.log(Login.flashError)
    }
});
Then("I can log out from the page", () => {
    Login.logOutBtn.click()
    browser.pause(2000);
});
Then("I'm able to write some text", () => {
    Frame.textWindow.setValue("An iFrame containing the TinyMCE WYSIWYG Editor")
    browser.pause(2000);
});
Then("I'll receive expected number on a indicator", () => {
    expect(Slider.number).toHaveText("4")
    browser.pause(2000);
});
Then("additional information will appear below the picture", () => {
    expect(Hover.profile1).toBeClickable()
    //expect(Hover.profile2).toBeClickable()
    // expect(Hover.profile3).toBeClickable()
    browser.pause(2000);
});
Then("I can hover on Back to JQuery UI option and click it", () => {
    JQuery.backToBtn.waitForClickable({ timeout: 3000 });
    JQuery.backToBtn.getLocation();
    //Hover.user2.getLocation();
    //Hover.user3.getLocation();
    console.log("----> location above <----")
    JQuery.backToBtn.moveTo( 0, 0 )
    JQuery.backToBtn.click()
});
Then("I'm redirected to specyfic page", () => {
    expect(browser).toHaveUrl('http://the-internet.herokuapp.com/jqueryui')
});
Then("pop up appears", () => {
    browser.getAlertText()
    console.log('HERE ----> ' + browser.getAlertText())
    browser.pause(2000)
});
Then("I should be able to accept alert", () => {
    browser.acceptAlert()
    expect(JSAlerts.resultsText).toHaveText('You successfuly clicked an alert')
    browser.pause(2000)
});
Then("I should be able to dismiss alert", () => {
    browser.dismissAlert()
    expect(JSAlerts.resultsText).toHaveText('You clicked: Cancel')
    browser.pause(2000)
});
Then("I should be able to type some text in", () => {
    browser.sendAlertText('This is some test message')
    browser.acceptAlert()
    expect(JSAlerts.resultsText).toHaveText('You entered: This is some test message')
    browser.pause(2000)
});
Then("message displays last key entered", () => {
    Interaction.result.waitForDisplayed(3000)
    let isDisplayed = Interaction.result.isDisplayed();
    console.log("Here ---->" + isDisplayed);
    browser.pause(2000)
});
Then("New tab is open", () => {
    browser.switchWindow('/windows/new')
    browser.getWindowHandles()
    console.log("Here ---> " + browser.getTitle())
    browser.pause(1000)
    browser.closeWindow()
    browser.pause(1000)
});