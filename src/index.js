import Stack from './stack';
import Queue from './queue';

const left = ['(', '{', '['];
const right = [')', '}', ']'];

// 判断括号是否对称(大括号，小括号，中括号)
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

// 中缀表达式转化成后缀表达式
export function postfixExpression(infixExpression) {
  const stack = new Stack();// stack 符号栈
  const queue = new Queue();// queue 输出结果中可能包含数值或者操作符。
  const Operators = /(!==|!=|===|==|&&|\|\||<=|<|>=|>|\+|-|\*|%|!|\/|\(|\))/;
  const regexp = new RegExp(Operators, 'g');
  const items = infixExpression.replace(regexp, ' $1 ').split(/\s+/).filter(elem => elem.length > 0);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (!stack.isEmpty() && stack.top() !== '(') {
        queue.enqueue(stack.pop());
      }
      stack.pop();// 丢弃左括号
    } else if (Operators.test(item)) {
      // 如果当前操作符比栈顶操作符优先级要高，当前操作符直接入栈。
      // 否则，弹出栈顶符号元素入队列，直到栈顶操作符优先级比当前操作符要小。
      while(!stack.isEmpty() && lessThan(item, stack.top())) {
        queue.enqueue(stack.pop());
      }
      stack.push(item);
    } else {
      // 数值直接入队列
      queue.enqueue(item);
    }
  }
  while(!stack.isEmpty()) {
    queue.enqueue(stack.pop());
  }
  return queue.store.join('');
}

function moreThan(oper1, oper2) {
  return getOperatorLevel(oper1) > getOperatorLevel(oper2);
}

function lessThan(oper1, oper2) {
  return getOperatorLevel(oper1) <= getOperatorLevel(oper2);
}

function getOperatorLevel(operator) {
  switch (operator) {
    case '||': return 0;
    case '&&': return 1;
    case '==':
    case '===':
    case '!=':
    case '!==': return 2;
    case '>':
    case '>=':
    case '<':
    case '<=': return 3;
    case '+':
    case '-': return 4;
    case '*':
    case '%':
    case '/': return 5;
    default: return 0;
  }
}