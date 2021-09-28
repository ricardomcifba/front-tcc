import { MaterialDashboardAngularPage } from './app.po';
describe('material-dashboard-angular App', function () {
    var page;
    beforeEach(function () {
        page = new MaterialDashboardAngularPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map