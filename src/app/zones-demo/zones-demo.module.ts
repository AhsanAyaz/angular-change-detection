import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesDemoRoutingModule } from './zones-demo-routing.module';
import { ZonesDemoComponent } from './zones-demo.component';
import { MiniBoxComponent } from './components/mini-box/mini-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ZonesDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    ZonesDemoComponent,
    MiniBoxComponent
  ]
})
export class ZonesDemoModule { }
