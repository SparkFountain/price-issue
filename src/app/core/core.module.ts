import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './dummy-components/slideshow/slideshow.component';
import { TranslocoModule } from '@ngneat/transloco';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SlideshowComponent],
  imports: [CommonModule, TranslocoModule, MatCardModule],
  exports: [SlideshowComponent],
})
export class CoreModule {}
