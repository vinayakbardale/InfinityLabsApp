import { InfinityAppPage } from './app.po';

describe('infinity-app App', () => {
  let page: InfinityAppPage;

  beforeEach(() => {
    page = new InfinityAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
