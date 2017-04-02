import { OverhandPage } from './app.po';

describe('overhand App', function() {
  let page: OverhandPage;

  beforeEach(() => {
    page = new OverhandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
