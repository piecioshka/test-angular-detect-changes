import { HomePage } from '../page-objects/app.po';

describe('test-angular-detect-changes App', () => {
  let page: HomePage = null;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });

  it('should display list', () => {
    expect(page.getList().isPresent()).toBeTruthy();
  });

  it('should display items', () => {
    expect(page.getItems().count()).toEqual(3);
  });
});
