import { Angular2AdminGentelellaPage } from './app.po';

describe('angular2-admin-gentelella App', () => {
  let page: Angular2AdminGentelellaPage;

  beforeEach(() => {
    page = new Angular2AdminGentelellaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
