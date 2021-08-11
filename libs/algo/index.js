
function Tree(options = {}) {
  this.nodes = options.data || [];
  this.objectId = options.objectId || 'objectId';
  this.parentId = options.parentId || 'parentId';
}

// 先序遍历
Tree.prototype.preOrder = function() {
}

// 后序遍历
Tree.prototype.postOrder = function() {
}

// 层次遍历
Tree.prototype.levelOrder = function() {
}

export default Tree;