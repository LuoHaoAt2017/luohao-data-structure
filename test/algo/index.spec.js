describe("基础算法", function() {

  test("JS大数相加", function() {
    // const val1 = 10000000000000000;
    // const val2 = 11111111111111111;
    // const resp = 21111111111111112;
    // JS 所能表达的最大整数据是2的53次方：9007199254740992。
    function sum(val1, val2) {
      val1 = val1 + "";
      val2 = val2 + "";
      const len = Math.max(val1.length, val2.length);
      val1 = val1
        .padStart(len, "0")
        .split("")
        .map((e) => parseInt(e));
      val2 = val2
        .padStart(len, "0")
        .split("")
        .map((e) => parseInt(e));
      let temp = 0,
        resp = "";
      for (let i = len - 1; i >= 0; i--) { // 倒叙
        temp = Math.floor((val1[i] + val2[i] + temp) / 10);
        resp = ((val1[i] + val2[i]) % 10) + resp; // 顺序很重要
      }
      if (temp === 1) {
        resp = resp + '0';
      }
      return resp;
    }
    const val1 = "1000000000000000000000000000";
    const val2 = "1111111111111111111111111111";
    expect(sum(val1, val2)).toBe("2111111111111111111111111111");
  });
});