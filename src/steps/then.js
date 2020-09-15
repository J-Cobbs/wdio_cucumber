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