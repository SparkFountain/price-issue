import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImprintRoutingModule } from './imprint-routing.module';
import { ImprintComponent } from './imprint.component';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ImprintComponent],
  imports: [
    CommonModule,
    ImprintRoutingModule,
    MatCardModule,
    MatIconModule,
    TranslocoModule,
  ],
})
export class ImprintModule {}
