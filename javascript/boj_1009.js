/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1009
 * Level: Bronze II
 * Algorithm: Math
 */

/* Pseudocode *
주어진 Test Case 수만큼 순회를 돈다.
a의 b제곱을 하여 10으로 나눈 나머지를 구하는 문제이지만, 숫자가 커지면 Infinity가 출력되므로 숫자를 줄여야할 필요가 있다.
자연수의 n제곱의 1의 자리수는 모두 같거나, 2단위로 반복되거나 4단위로 반복된다는 특징이 있다.
따라서 b를 4로 나눈 나머지를 지수로 쓰면 원래 산출하려고 했던 수와 같은 1의 자리 값을 가진다.
단, 이 지수가 0일 경우 4로 계산을 해주어야하므로 조건을 추가했다.
출력 시에도 나머지가 0일 경우 10으로 출력하도록 조건을 추가했다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const total = Number(input.shift());

for (let i = 0; i < total; i++) {
  const [a, b] = input.shift().split(" ");
  const exp = Number(b) % 4 || 4;
  const lastNum = Number(a) ** exp % 10;
  console.log(lastNum || 10);
}
