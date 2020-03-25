import { Component, OnInit } from '@angular/core';
import { CdTreePageComponent } from '../shared/components/cd-tree-page/cd-tree-page.component';
import { DEMO_TREE2 } from '../constants/demo-tree';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-change-detector-ref',
  templateUrl: './change-detector-ref.component.html',
  styleUrls: ['./change-detector-ref.component.scss']
})
export class ChangeDetectorRefComponent extends CdTreePageComponent implements OnInit {
  performingChange: boolean;
  constructor() {
    super();
  }

  ngOnInit() {
    this.resetTree();
  }

  disableLeftTree() {
    this.performingChange = true;
    const treeClone = cloneDeep(DEMO_TREE2);
    treeClone.children[0] = this.detachCDRefFromNode(treeClone.children[0]);
    this.tree = treeClone;
    setTimeout(() => this.performingChange = false, 300);
  }

  disableRightTree() {
    this.performingChange = true;
    const treeClone = cloneDeep(DEMO_TREE2);
    treeClone.children[1] = this.detachCDRefFromNode(treeClone.children[1]);
    this.tree = treeClone;
    setTimeout(() => this.performingChange = false, 300);
  }

  disableRightTreeNestedNode() {
    this.performingChange = true;
    const treeClone = cloneDeep(DEMO_TREE2);
    treeClone.children[1].children[1] = this.detachCDRefFromNode(treeClone.children[1].children[1]);
    this.tree = treeClone;
    setTimeout(() => this.performingChange = false, 300);
  }

  detachCDRefFromNode(node) {
    node.options = node.options || { detachRef: false };
    node.options.detachRef = true;
    return node;
  }

  resetTree() {
    const treeClone = cloneDeep(DEMO_TREE2);
    this.tree = treeClone;
  }

}
