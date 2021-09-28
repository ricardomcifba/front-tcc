/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SobreComponent } from './sobre.component';
describe('NotificationsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SobreComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SobreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sobre.component.spec.js.map