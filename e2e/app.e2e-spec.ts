import { DemoAngular2Page } from './app.po';

describe('demo-angular2 App', () => {
  let page: DemoAngular2Page;

  beforeEach(() => {
    page = new DemoAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
