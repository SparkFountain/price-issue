import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ScenesComponent } from './scenes/scenes.component';
import { CharactersComponent } from './characters/characters.component';
import { ExtractsComponent } from './extracts/extracts.component';
import { DownloadComponent } from './download/download.component';

import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BookComponent,
    ScenesComponent,
    CharactersComponent,
    ExtractsComponent,
    DownloadComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    TranslocoModule,
    CoreModule,
    MatCardModule,
  ],
})
export class BookModule {}
