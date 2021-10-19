import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ScenesComponent } from './scenes/scenes.component';
import { CharactersComponent } from './characters/characters.component';
import { ExtractComponent } from './extract/extract.component';
import { DownloadComponent } from './download/download.component';

import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    BookComponent,
    ScenesComponent,
    CharactersComponent,
    ExtractComponent,
    DownloadComponent,
  ],
  imports: [CommonModule, BookRoutingModule, TranslocoModule, MatCardModule],
})
export class BookModule {}
