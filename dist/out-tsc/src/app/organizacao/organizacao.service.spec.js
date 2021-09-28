import { async, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';
import { OrganizacaoComponent } from './organizacao.component';
import { OrganizacaoService } from './organizacao.service';
describe('AnaliseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(OrganizacaoService);
        expect(service).toBeTruthy();
    });
});
describe('AnaliseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OrganizacaoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OrganizacaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=organizacao.service.spec.js.map