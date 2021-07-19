import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColaboreDashboardAdminPage } from './colabore-dashboard-admin.page';

describe('ColaboreDashboardAdminPage', () => {
  let component: ColaboreDashboardAdminPage;
  let fixture: ComponentFixture<ColaboreDashboardAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboreDashboardAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboreDashboardAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
