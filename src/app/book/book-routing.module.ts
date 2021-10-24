import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ScenesComponent } from './scenes/scenes.component';

const routes: Routes = [
  {
    path: 'schauplaetze',
    component: ScenesComponent,
  },
  {
    path: 'charaktere',
    component: CharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
