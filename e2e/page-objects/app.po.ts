import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getList() {
    return element(by.css('demo-list'));
  }

  getItems() {
    return this.getList().$$('demo-item');
  }
}
