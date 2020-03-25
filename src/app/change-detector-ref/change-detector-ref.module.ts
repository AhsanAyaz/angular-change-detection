import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectorRefRoutingModule } from './change-detector-ref-routing.module';
import { ChangeDetectorRefComponent } from './change-detector-ref.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectorRefRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ChangeDetectorRefComponent]
})
export class ChangeDetectorRefModule { }
