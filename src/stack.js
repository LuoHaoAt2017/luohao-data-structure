export default function Stack() {
  this.list = [];
}

Stack.prototype.push = function(elem) {
  this.list.push(elem);
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    return this.list.splice(this.list.length - 1, 1)[0];
  }
};

Stack.prototype.top = function() {
  if (!this.isEmpty()) {
    return this.list[this.list.length - 1];
  }
};

Stack.prototype.isEmpty = function() {
  return this.list.length === 0;
};

Stack.prototype.clear = function() {
  this.list = [];
};

const left = ['(', '{', '['];

const right = [')', '}', ']'];

export function isSymmetry(expression) {
  expression = expression.trim();
  const chars = expression.split('');
  const stack = new Stack();
  for (let i = 0; i < chars.length; i++) {
    if (left.includes(chars[i])) {
      stack.push(chars[i]);
    } else if (right.includes(chars[i])) {
      if (!isMatch(stack.pop(), chars[i])) {
        return false;
      }
    }
  }
  return true;
}

function isMatch(left, right) {
  let result = false;
  switch (left) {
    case '(': result = right === ')'; break;
    case '{': result = right === '}'; break;
    case '[': result = right === ']'; break;
  }
  return result;
}
