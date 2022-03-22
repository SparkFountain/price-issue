import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetEarthNetworkComponent } from './planet-earth-network.component';

describe('PlanetEarthNetworkComponent', () => {
  let component: PlanetEarthNetworkComponent;
  let fixture: ComponentFixture<PlanetEarthNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetEarthNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetEarthNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
