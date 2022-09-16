import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaAngularComponent } from './ola-angular.component';

describe('OlaAngularComponent', () => {
  let component: OlaAngularComponent;
  let fixture: ComponentFixture<OlaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlaAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
