import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetEarthNetworkRoutingModule } from './planet-earth-network-routing.module';
import { PlanetEarthNetworkComponent } from './planet-earth-network.component';
import { HistoryComponent } from './history/history.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { DiscoverySpheresComponent } from './discovery-spheres/discovery-spheres.component';
import { OnlineComponent } from './online/online.component';


@NgModule({
  declarations: [
    PlanetEarthNetworkComponent,
    HistoryComponent,
    PhilosophyComponent,
    DiscoverySpheresComponent,
    OnlineComponent
  ],
  imports: [
    CommonModule,
    PlanetEarthNetworkRoutingModule
  ]
})
export class PlanetEarthNetworkModule { }
