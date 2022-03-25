import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetEarthNetworkRoutingModule } from './planet-earth-network-routing.module';
import { PlanetEarthNetworkComponent } from './planet-earth-network.component';
import { HistoryComponent } from './history/history.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { DiscoverySpheresComponent } from './discovery-spheres/discovery-spheres.component';
import { OnlineComponent } from './online/online.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    PlanetEarthNetworkComponent,
    HistoryComponent,
    PhilosophyComponent,
    DiscoverySpheresComponent,
    OnlineComponent,
  ],
  imports: [CommonModule, PlanetEarthNetworkRoutingModule, TranslocoModule],
})
export class PlanetEarthNetworkModule {}
