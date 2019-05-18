import { HomePage } from '../page-objects/app.po';

describe('test-angular-detect-changes App', () => {
  let page: HomePage = null;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });

  it('should display list of channels', () => {
    expect(page.getList().isPresent()).toBeTruthy();
  });

  it('should display list of channels', () => {
    expect(page.getItems().count()).toEqual(3);
  });
});
