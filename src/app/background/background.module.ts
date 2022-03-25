import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundRoutingModule } from './background-routing.module';
import { OvertourismComponent } from './overtourism/overtourism.component';
import { GreenConscienceComponent } from './green-conscience/green-conscience.component';
import { EcotourismComponent } from './ecotourism/ecotourism.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    OvertourismComponent,
    GreenConscienceComponent,
    EcotourismComponent,
  ],
  imports: [CommonModule, BackgroundRoutingModule, TranslocoModule],
})
export class BackgroundModule {}
