import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionOnPushRoutingModule } from './change-detection-on-push-routing.module';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionOnPushRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ChangeDetectionOnPushComponent]
})
export class ChangeDetectionOnPushModule { }
