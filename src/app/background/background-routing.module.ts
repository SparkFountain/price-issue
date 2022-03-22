import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcotourismComponent } from './ecotourism/ecotourism.component';
import { GreenConscienceComponent } from './green-conscience/green-conscience.component';
import { OvertourismComponent } from './overtourism/overtourism.component';

const routes: Routes = [
  ...['overtourism', 'overtourismus'].map((path: string) => ({
    path,
    component: OvertourismComponent,
  })),
  ...['ecotourism', 'oekotourismus'].map((path: string) => ({
    path,
    component: EcotourismComponent,
  })),
  ...['green-conscience', 'gruenes-gewissen'].map((path: string) => ({
    path,
    component: GreenConscienceComponent,
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackgroundRoutingModule {}
