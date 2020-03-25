import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionTreeComponent } from './change-detection-tree/change-detection-tree.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'cd-tree'
}, {
  path: 'cd-tree',
  component: ChangeDetectionTreeComponent
}, {
  path: 'cd-tree-onp',
  loadChildren: () => import('./change-detection-on-push/change-detection-on-push.module').then(m => m.ChangeDetectionOnPushModule)
}, {
  path: 'cd-ref',
  loadChildren: () => import('./change-detector-ref/change-detector-ref.module').then(m => m.ChangeDetectorRefModule)
}, {
  path: 'zones-demo',
  loadChildren: () => import('./zones-demo/zones-demo.module').then(m => m.ZonesDemoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
