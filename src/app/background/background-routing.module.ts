import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenConscienceComponent } from './green-conscience/green-conscience.component';
import { OvertourismComponent } from './overtourism/overtourism.component';

const routes: Routes = [
  ...['overtourism', 'overtourismus'].map((path: string) => ({
    path,
    component: OvertourismComponent,
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
