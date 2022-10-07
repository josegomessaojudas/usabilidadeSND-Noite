import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePipesComponent } from './teste-pipes.component';

describe('TestePipesComponent', () => {
  let component: TestePipesComponent;
  let fixture: ComponentFixture<TestePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestePipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
