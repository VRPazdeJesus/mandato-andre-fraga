import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NossoMandatoDashboardAdminPage } from './nosso-mandato-dashboard-admin.page';

describe('NossoMandatoDashboardAdminPage', () => {
  let component: NossoMandatoDashboardAdminPage;
  let fixture: ComponentFixture<NossoMandatoDashboardAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NossoMandatoDashboardAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NossoMandatoDashboardAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
