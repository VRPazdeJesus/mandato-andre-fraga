import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetosComSociedadeCivilPage } from './projetos-com-sociedade-civil.page';

describe('ProjetosComSociedadeCivilPage', () => {
  let component: ProjetosComSociedadeCivilPage;
  let fixture: ComponentFixture<ProjetosComSociedadeCivilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosComSociedadeCivilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetosComSociedadeCivilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
