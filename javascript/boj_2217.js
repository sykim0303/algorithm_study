/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 2217
 * Level: Silver IV
 * Algorithm: Greedy, Sort
 */

/* Pseudocode *
입력 값을 내림차순으로 정렬한다.
사용되는 로프의 수 * 사용되는 로프 중 버틸 수 있는 최대 중량이 가장 낮은 로프의 값이 로프들이 버틸 수 있는 최대의 중량이므로,
주어진 총 개수만큼 순회를 돌아 해당 식의 값을 구해 새 배열 numbers에 push한다.
배열 numbers에서 가장 큰 값을 출력한다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const total = input.shift();
input.sort((a, b) => {
  return Number(b) - Number(a);
});
const numbers = [];
for (i = 0; i < total; i++) {
  numbers.push((i + 1) * Number(input[i]));
}
console.log(Math.max(...numbers));
