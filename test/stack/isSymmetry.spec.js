import { isSymmetry } from '../utils';
import Stack from '../utils/stack';

describe('stack 构造测试', () => {
  const stack = new Stack();

  test('基本功能测试', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top()).toBe(2);
  });

  test('({})是对称的', () => {
    expect(isSymmetry('({})')).toBeTruthy();
  });

  test(')(不是对称的', () => {
    expect(isSymmetry(')(')).toBeFalsy();
  });

  test('()()是对称的', () => {
    expect(isSymmetry('()()')).toBeTruthy();
  });

  test('({()})是对称的', () => {
    expect(isSymmetry('({()})')).toBeTruthy();
  });

  test('(({})})不是对称的', () => {
    expect(isSymmetry('(({})})')).toBeFalsy();
  });

  test('({)不是对称的', () => {
    expect(isSymmetry('({)')).toBeFalsy();
  });

  test('({)}不是对称的', () => {
    expect(isSymmetry('({)}')).toBeFalsy();
  });

  test('(()())是对称的', () => {
    expect(isSymmetry('(()())')).toBeTruthy();
  });
});