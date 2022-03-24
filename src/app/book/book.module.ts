import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ScenesComponent } from './scenes/scenes.component';
import { CharactersComponent } from './characters/characters.component';
import { ExtractsComponent } from './extracts/extracts.component';
import { DownloadComponent } from './download/download.component';

import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { TranslocoModule } from '@ngneat/transloco';
import { CoreModule } from '../core/core.module';
import { LiteratureComponent } from './literature/literature.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BookComponent,
    ScenesComponent,
    CharactersComponent,
    ExtractsComponent,
    DownloadComponent,
    LiteratureComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    TranslocoModule,
    CoreModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
  ],
})
export class BookModule {}
