export default function Stack() {
  this.store = [];
}

Stack.prototype.push = function(elem) {
  this.store.push(elem);
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    return this.store.splice(this.store.length - 1, 1)[0];
  }
};

Stack.prototype.top = function() {
  if (!this.isEmpty()) {
    return this.store[this.store.length - 1];
  }
};

Stack.prototype.isEmpty = function() {
  return this.store.length === 0;
};

Stack.prototype.clear = function() {
  this.store = [];
};
