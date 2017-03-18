import { Angular2CliServerPage } from './app.po';

describe('angular2-cli-server App', () => {
  let page: Angular2CliServerPage;

  beforeEach(() => {
    page = new Angular2CliServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
