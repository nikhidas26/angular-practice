import { Angular2RoutingSeedProjectFinalPage } from './app.po';

describe('angular2-routing-seed-project-final App', () => {
  let page: Angular2RoutingSeedProjectFinalPage;

  beforeEach(() => {
    page = new Angular2RoutingSeedProjectFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
