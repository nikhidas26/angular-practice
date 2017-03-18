import { Angular2ServicesAssignmentPage } from './app.po';

describe('angular2-services-assignment App', () => {
  let page: Angular2ServicesAssignmentPage;

  beforeEach(() => {
    page = new Angular2ServicesAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
