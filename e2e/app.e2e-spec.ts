import { ReportBurstingUIPage } from './app.po';

describe('report-bursting-ui App', function() {
  let page: ReportBurstingUIPage;

  beforeEach(() => {
    page = new ReportBurstingUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
