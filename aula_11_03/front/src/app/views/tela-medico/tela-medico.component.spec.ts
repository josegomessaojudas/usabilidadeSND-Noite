import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMedicoComponent } from './tela-medico.component';

describe('TelaMedicoComponent', () => {
  let component: TelaMedicoComponent;
  let fixture: ComponentFixture<TelaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
