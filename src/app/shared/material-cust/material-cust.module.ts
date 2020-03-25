import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


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
