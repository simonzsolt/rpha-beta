import { RphaBetaPage } from './app.po';

describe('rpha-beta App', function() {
  let page: RphaBetaPage;

  beforeEach(() => {
    page = new RphaBetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
