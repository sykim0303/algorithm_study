/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 27160
 * Level: Bronze II
 * Algorithm: String
 */

/* Pseudocode *
new Map()을 사용해서 fruit 별 총 개수를 구한다.
map의 value 중에 5가 있으면 종을 쳐야하므로, values만 가져와서 5가 포함되어있으면 YES, 아니면 NO를 출력한다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const map = new Map();

input.forEach((item) => {
  const [fruit, amount] = item.split(" ");
  if (!map.get(fruit)) {
    map.set(fruit, Number(amount));
  } else {
    map.set(fruit, map.get(fruit) + Number(amount));
  }
});

const values = [...map.values()];
console.log(values.includes(5) ? "YES" : "NO");
