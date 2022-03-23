import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DownloadComponent } from './download/download.component';
import { ExtractsComponent } from './extracts/extracts.component';
import { LiteratureComponent } from './literature/literature.component';
import { ScenesComponent } from './scenes/scenes.component';

const routes: Routes = [
  ...['scenes', 'schauplaetze'].map((path: string) => ({
    path,
    component: ScenesComponent,
  })),
  ...['characters', 'charaktere'].map((path: string) => ({
    path,
    component: CharactersComponent,
  })),
  ...['extracts', 'leseproben'].map((path: string) => ({
    path,
    component: ExtractsComponent,
  })),
  ...['download'].map((path: string) => ({
    path,
    component: DownloadComponent,
  })),
  ...['literature', 'literatur'].map((path: string) => ({
    path,
    component: LiteratureComponent,
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
