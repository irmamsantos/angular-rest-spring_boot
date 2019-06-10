import { ModulosPage } from './app.po';

describe('modulos App', () => {
  let page: ModulosPage;

  beforeEach(() => {
    page = new ModulosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
