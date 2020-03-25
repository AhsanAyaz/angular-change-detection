import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push.component';

const routes: Routes = [{
  path: '',
  component: ChangeDetectionOnPushComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionOnPushRoutingModule { }
