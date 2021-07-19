import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuemSouDashboardAdminPage } from './quem-sou-dashboard-admin.page';

describe('QuemSouDashboardAdminPage', () => {
  let component: QuemSouDashboardAdminPage;
  let fixture: ComponentFixture<QuemSouDashboardAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemSouDashboardAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuemSouDashboardAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
