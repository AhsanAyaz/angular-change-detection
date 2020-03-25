import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TreeNode } from '../../../models/tree-node';

@Component({
  selector: 'app-tree-node-onp',
  templateUrl: './tree-node-onp.component.html',
  styleUrls: ['./tree-node-onp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeOnpComponent implements OnInit {
  @Input() node: TreeNode;
  @Input() showSpinner = false;
  constructor() { }

  ngOnInit() {
  }

}
