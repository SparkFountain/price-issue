import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { TranslocoModule } from '@ngneat/transloco';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import {
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
  RecaptchaV3Module,
  RECAPTCHA_SETTINGS,
  RECAPTCHA_V3_SITE_KEY,
} from 'ng-recaptcha';

const RECAPTCHA_V3_KEY = '6LeHBK0bAAAAAOQVTvBOWhfb08cQfUpFoSE3FsmP';
const RECAPTCHA_V2_DUMMY_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    TranslocoModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RecaptchaV3Module,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: RECAPTCHA_V3_KEY,
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: RECAPTCHA_V2_DUMMY_KEY,
      } as RecaptchaSettings,
    },
  ],
})
export class ContactModule {}
