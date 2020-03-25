import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  declarations: [],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class MaterialCustModule { }
