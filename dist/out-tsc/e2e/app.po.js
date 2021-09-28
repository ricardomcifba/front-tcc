import { browser, element, by } from 'protractor';
var MaterialDashboardAngularPage = /** @class */ (function () {
    function MaterialDashboardAngularPage() {
    }
    MaterialDashboardAngularPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    MaterialDashboardAngularPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return MaterialDashboardAngularPage;
}());
export { MaterialDashboardAngularPage };
//# sourceMappingURL=app.po.js.map