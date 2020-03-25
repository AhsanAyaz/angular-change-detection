import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../../../models/tree-node';
import { DEMO_TREE } from '../../../constants/demo-tree';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-cd-tree-page',
  templateUrl: './cd-tree-page.component.html',
  styleUrls: ['./cd-tree-page.component.scss']
})
export class CdTreePageComponent implements OnInit {
  triggerTapCounter = 0;
  options = {
    showSpinners: false
  };
  tree: TreeNode = cloneDeep(DEMO_TREE);
  constructor() { }

  ngOnInit() {
  }

  randomizeDepths(node: TreeNode) {
    const flattenResp = this.flattenNodes(1, cloneDeep(node));
    const finalTree = this.createTree(flattenResp.nodes, 1 , flattenResp.maxDepth);
    this.tree = finalTree;
  }

  createTree(nodes, depth = 1, maxDepth = 1) {
    if (depth === 1) {
      nodes.splice(0, 1); // remove the first node, we're creating it below
    }
    const node: TreeNode = {
      depth: depth,
      children: [
      ]
    };
    node.children = nodes.splice(0, Math.ceil((Math.random() * 3) + 1)).map(() => {
      return this.createTree(nodes, depth + 1, maxDepth);
    });
    console.log(node.children);
    return node;
  }

  flattenNodes(depth: number, node: TreeNode): { maxDepth: number, nodes: Array<TreeNode> } {
    let nodes = [];
    let maxDepth = node.depth > depth ? node.depth : depth;
    nodes.push(node);
    if (node.children && node.children.length) {
      node.children.map((childNode) => {
        const childrenFlattenedResp = this.flattenNodes(depth, childNode);
        nodes = [...nodes, ...childrenFlattenedResp.nodes];
        if (childrenFlattenedResp.maxDepth > maxDepth) {
          maxDepth = childrenFlattenedResp.maxDepth;
        }
      });
    }
    return {
      maxDepth,
      nodes
    };
  }

  resetTree() {
    this.tree = cloneDeep(DEMO_TREE);
  }

  triggerTap() {
    this.triggerTapCounter++;
  }

}
