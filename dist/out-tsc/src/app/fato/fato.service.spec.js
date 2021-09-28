import { async, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';
import { FatoComponent } from './fato.component';
import { FatoService } from './Fato.service';
describe('FatoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FatoService);
        expect(service).toBeTruthy();
    });
});
describe('AnaliseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FatoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FatoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fato.service.spec.js.map