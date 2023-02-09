/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1008
 * Level: Bronze V
 * Algorithm: Math
 */

/* Pseudocode *
입력 값을 숫자로 변환 후 나눗셈을 실행해 출력한다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

console.log(Number(input[0]) / Number(input[1]));
