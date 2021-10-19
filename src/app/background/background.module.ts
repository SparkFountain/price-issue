import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundRoutingModule } from './background-routing.module';
import { OvertourismComponent } from './overtourism/overtourism.component';
import { GreenConscienceComponent } from './green-conscience/green-conscience.component';


@NgModule({
  declarations: [
    OvertourismComponent,
    GreenConscienceComponent
  ],
  imports: [
    CommonModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }
