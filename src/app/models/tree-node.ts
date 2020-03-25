export interface TreeNode {
  depth: number;
  children?: Array<TreeNode>;
  options?: {
    detachRef: boolean
  };
}
