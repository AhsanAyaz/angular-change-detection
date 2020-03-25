import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../models/tree-node';
import { CdTreePageComponent } from '../shared/components/cd-tree-page/cd-tree-page.component';

@Component({
  selector: 'app-change-detection-tree',
  templateUrl: './change-detection-tree.component.html',
  styleUrls: ['./change-detection-tree.component.scss']
})
export class ChangeDetectionTreeComponent extends CdTreePageComponent implements OnInit {

}
