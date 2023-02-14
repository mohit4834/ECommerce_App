import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallBackComponent } from './fall-back.component';

describe('FallBackComponent', () => {
  let component: FallBackComponent;
  let fixture: ComponentFixture<FallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
