import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverySpheresComponent } from './discovery-spheres.component';

describe('DiscoverySpheresComponent', () => {
  let component: DiscoverySpheresComponent;
  let fixture: ComponentFixture<DiscoverySpheresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverySpheresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverySpheresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
