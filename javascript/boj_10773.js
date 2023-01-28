/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 10773
 * Level: Silver IV
 * Algorithm: Stack
 */

/* Pseudocode *
입력 값을 순회하면서, 값이 0일 경우에는 stackArr에서 마지막 값을 pop으로 제거하고 answer에서 해당 값을 뺀다.
0이 아닐 경우에는 입력 값을 stackArr에 추가하고 answer에 해당 값을 더한다.
순회가 끝나면 answer을 출력한다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const total = Number(input.shift());
const stackArr = [];
let answer = 0;

for (let i = 0; i < total; i++) {
  const number = Number(input[i]);
  if (number === 0) {
    const pop = stackArr.pop();
    answer -= pop;
  } else {
    stackArr.push(number);
    answer += number;
  }
}
console.log(answer);
