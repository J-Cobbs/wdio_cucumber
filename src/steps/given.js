import { Given } from 'cucumber';
import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkElementExists from '../support/check/checkElementExists';
import checkEqualsText from '../support/check/checkEqualsText';
import checkModal from '../support/check/checkModal';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isDisplayed from '../support/check/isDisplayed';
import openWebsite from '../support/action/openWebsite';
import setWindowSize from '../support/action/setWindowSize';
import { ContentWriter } from 'istanbul-lib-report';

Given('I am on herokuapp page', () => {
  browser.url('./')
});
Given('I am on Checkboxes page', () => {
    browser.url('./checkboxes')
  });

Given('I am on context menu page', () => {
    browser.url('./context_menu')
  });

Given('I am on digest auth page', () => {
    browser.url('./digest_auth')
    browser.pause(2000);
  })

Given('I am on drag and drop page', () => {
    browser.url('./drag_and_drop')
    browser.pause(2000);
  })

  Given('I am on dropdown page', () => {
    browser.url('./dropdown')
    browser.pause(2000);
  })
  Given('I am on dynamic content page', () => {
    browser.url('./dynamic_content')
    browser.pause(2000);
  })
  Given('I am on dynamic control page', () => {
    browser.url('./dynamic_controls')
    browser.pause(2000);
  })
  Given('I am on entry_ad page', () => {
    browser.url('./entry_ad')
    browser.pause(2000);
  })
  Given('I am on exit_intent page', () => {
    browser.url('./exit_intent')
    browser.pause(2000);
  })
  Given('I am on upload page', () => {
    browser.url('./upload')
    browser.pause(2000);
  })