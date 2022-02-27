import { postfixExpression } from '../utils';

describe("中缀表达式转后缀表达式", () => {

  test("(1 + 2) * (3 + 4) / 4", () => {
    expect(postfixExpression("(1 + 2) * (3 + 4) / 4")).toBe('12+34+*4/');
  });
});