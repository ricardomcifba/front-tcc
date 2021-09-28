import { async, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';
import { AnaliseComponent } from './analise.component';
import { AnaliseService } from './analise.service';
describe('AnaliseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AnaliseService);
        expect(service).toBeTruthy();
    });
});
describe('AnaliseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnaliseComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnaliseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=analise.service.spec.js.map