import { cloneDeep } from 'lodash';

function Tree(options) {
  this.nodes = options.data;
  this.objectId = options.objectId || 'objectId';
  this.parentId = options.parentId || 'parentId';
  this.tree = [];
  this.format();
}

Tree.prototype.format = function() {
  const nodes = this.nodes;
  for(let i = 0; i < nodes.length; i++) {
    if (!nodes[i].parentId) {
      const node = cloneDeep(nodes[i]);
      this.collect(node, i);
      this.tree.push(node);
    }
  }
  console.log('nodes: ', nodes);
}

Tree.prototype.collect = function(node) {
  const oid = this.objectId;
  const pid = this.parentId;
  for(let i = 0; i < this.nodes.length; i++) {
    const curItem = this.nodes[i];
    if (node[oid] === curItem[pid]) {
      if (node[oid] !== curItem[oid]) {
        const childNode = cloneDeep(curItem);
        this.collect(childNode);
        if (!node.children) {
          node.children = [];
        }
        node.children.push(childNode);
      }
    }
  }
}

Tree.prototype.getData = function() {
  return this.tree;
}

export default Tree;