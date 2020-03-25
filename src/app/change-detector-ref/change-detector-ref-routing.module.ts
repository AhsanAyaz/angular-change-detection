import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectorRefComponent } from './change-detector-ref.component';

const routes: Routes = [{
  path: '',
  component: ChangeDetectorRefComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectorRefRoutingModule { }
