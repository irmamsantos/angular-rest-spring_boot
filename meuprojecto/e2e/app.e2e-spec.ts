import { MeuprojectoPage } from './app.po';

describe('meuprojecto App', () => {
  let page: MeuprojectoPage;

  beforeEach(() => {
    page = new MeuprojectoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
