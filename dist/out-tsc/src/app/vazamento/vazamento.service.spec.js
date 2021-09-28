import { async, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';
import { VazamentoComponent } from './vazamento.component';
import { VazamentoService } from './vazamento.service';
describe('AnaliseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(VazamentoService);
        expect(service).toBeTruthy();
    });
});
describe('VazamentoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VazamentoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VazamentoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vazamento.service.spec.js.map