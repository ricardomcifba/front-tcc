import * as tslib_1 from "tslib";
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
var TablePaginationComponent = /** @class */ (function () {
    function TablePaginationComponent(tableService, cdRef) {
        this.tableService = tableService;
        this.cdRef = cdRef;
        this.elements = [];
        this.previous = [];
        this.headElements = ['ID', 'First', 'Last', 'Handle'];
    }
    TablePaginationComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 15; i++) {
            this.elements.push({ id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
        }
        this.tableService.setDataSource(this.elements);
        this.elements = this.tableService.getDataSource();
        this.previous = this.tableService.getDataSource();
    };
    TablePaginationComponent.prototype.ngAfterViewInit = function () {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
        this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
        this.lastItemIndex = this.mdbTablePagination.lastItemIndex;
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    };
    TablePaginationComponent.prototype.onNextPageClick = function (data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    };
    TablePaginationComponent.prototype.onPreviousPageClick = function (data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    };
    tslib_1.__decorate([
        ViewChild(MdbTablePaginationComponent),
        tslib_1.__metadata("design:type", MdbTablePaginationComponent)
    ], TablePaginationComponent.prototype, "mdbTablePagination", void 0);
    TablePaginationComponent = tslib_1.__decorate([
        Component({
            selector: 'table-pagination',
            templateUrl: './table-pagination.component.html',
            styleUrls: ['./table-pagination.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MdbTableService,
            ChangeDetectorRef])
    ], TablePaginationComponent);
    return TablePaginationComponent;
}());
export { TablePaginationComponent };
//# sourceMappingURL=tablePagination.js.map