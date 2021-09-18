import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditalDeEmendaFormPage } from './edital-de-emenda-form.page';

describe('EditalDeEmendaFormPage', () => {
  let component: EditalDeEmendaFormPage;
  let fixture: ComponentFixture<EditalDeEmendaFormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditalDeEmendaFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditalDeEmendaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
