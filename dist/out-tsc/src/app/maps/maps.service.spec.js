import { async, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';
import { MapsComponent } from './maps.component';
import { VazamentoService } from './maps.service';
describe('VazamentoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(VazamentoService);
        expect(service).toBeTruthy();
    });
});
describe('MapsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MapsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MapsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=maps.service.spec.js.map