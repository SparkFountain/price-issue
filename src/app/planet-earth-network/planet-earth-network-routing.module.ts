import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverySpheresComponent } from './discovery-spheres/discovery-spheres.component';
import { HistoryComponent } from './history/history.component';
import { OnlineComponent } from './online/online.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';

const routes: Routes = [
  ...['history', 'entstehung'].map((path: string) => ({
    path,
    component: HistoryComponent,
  })),
  ...['philosophy', 'philosophie'].map((path: string) => ({
    path,
    component: PhilosophyComponent,
  })),
  ...['discovery-spheres', 'discovery-sphaeren'].map((path: string) => ({
    path,
    component: DiscoverySpheresComponent,
  })),
  ...['online'].map((path: string) => ({
    path,
    component: OnlineComponent,
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetEarthNetworkRoutingModule {}
