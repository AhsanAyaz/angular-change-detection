import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZonesDemoComponent } from './zones-demo.component';

const routes: Routes = [{
  path: '',
  component: ZonesDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonesDemoRoutingModule { }
