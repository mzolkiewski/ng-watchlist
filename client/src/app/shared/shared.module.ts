import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import { ValueToDateDirective } from './date-input-to-date/value-to-date.directive';
import { MainHeadingComponent } from './main-heading/main-heading.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ValueToDateDirective,
    MainHeadingComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    ValueToDateDirective,
    MainHeadingComponent,
  ],
})
export class SharedModule { }
