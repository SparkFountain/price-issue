import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenConscienceComponent } from './green-conscience.component';

describe('GreenConscienceComponent', () => {
  let component: GreenConscienceComponent;
  let fixture: ComponentFixture<GreenConscienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenConscienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenConscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
