import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenesComponent } from './scenes/scenes.component';

const routes: Routes = [
  {
    path: 'schauplaetze',
    component: ScenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
