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

window.onload = function () {
};
