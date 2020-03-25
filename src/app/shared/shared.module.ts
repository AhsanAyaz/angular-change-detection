import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustModule } from './material-cust/material-cust.module';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { TreeNodeOnpComponent } from './components/tree-node-onp/tree-node-onp.component';
import { CdTreePageComponent } from './components/cd-tree-page/cd-tree-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialCustModule
  ],
  declarations: [TreeNodeComponent, TreeNodeOnpComponent, CdTreePageComponent],
  exports: [
    MaterialCustModule,
    TreeNodeComponent,
    TreeNodeOnpComponent,
    CdTreePageComponent
  ]
})
export class SharedModule { }
