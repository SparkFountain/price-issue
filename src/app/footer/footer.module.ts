import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';


@NgModule({
  declarations: [
    ContactComponent,
    ImprintComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class FooterModule { }
