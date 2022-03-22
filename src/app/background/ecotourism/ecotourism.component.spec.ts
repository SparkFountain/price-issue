import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcotourismComponent } from './ecotourism.component';

describe('EcotourismComponent', () => {
  let component: EcotourismComponent;
  let fixture: ComponentFixture<EcotourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcotourismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcotourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
