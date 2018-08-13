/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser } from 'protractor';

export class AppPage {

  constructor() {
    // Forces default language
    this.navigateTo();
    browser.executeScript(() => localStorage.setItem('language', 'pt-BR'));
  }

  navigateTo() {
    return browser.get('/');
  }
}
