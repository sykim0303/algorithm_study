/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 19532
 * Level: Bronze II
 * Algorithm: Brute Force
 */

/* Pseudocode *
x와 y의 범위가 주어져있으므로, 반복문을 두 번 실행하여 주어진 연립 방정식을 만족하는 x와 y를 찾는다.
찾은 값을 answer 배열에 넣어주고, 반복문을 종료할 수 있도록 x와 y의 값을 조작한다.
answer 배열을 join하여 출력한다.
*/

const [a, b, c, d, e, f] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

let answer = [];

for (let x = -999; x < 1000; x++) {
  for (let y = -999; y < 1000; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      answer.push(x, y);
      x = 1000;
      y = 1000;
    }
  }
}

console.log(answer.join(" "));
