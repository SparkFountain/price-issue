import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractsComponent } from './extracts.component';

describe('ExtractComponent', () => {
  let component: ExtractsComponent;
  let fixture: ComponentFixture<ExtractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
