import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { DisclaimerComponent } from './disclaimer.component';
import { TranslocoModule } from '@ngneat/transloco';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DisclaimerComponent],
  imports: [
    CommonModule,
    DisclaimerRoutingModule,
    TranslocoModule,
    MatCardModule,
  ],
})
export class DisclaimerModule {}
