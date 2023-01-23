/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 2775
 * Level: Bronze I
 * Algorithm: Math
 */

/* Pseudocode *
주어진 Test Case 수만큼 순회를 돈다.
각 순회마다, k층과 n호 만큼의 0으로 채워진 배열을 만든다.
0층의 경우 n호에는 n만큼의 사람이 살고 있으므로 0층의 배열을 채워준다.
0층을 제외한 k층의 1호에는 아랫층의 1호만큼의 사람이 살고 있으므로 각 층의 1호의 값을 채워준다.
0층을 제외한 k층의 나머지 호수에는 k층의 n-1호 + k-1층의 n호 만큼의 사람이 살고 있으므로 해당 수식에 맞게 배열을 채워준다.
채워진 배열의 [k][n-1]을 출력한다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const total = Number(input.shift());

for (let i = 0; i < total; i++) {
  const floor = Number(input.shift());
  const unit = Number(input.shift());

  const apartment = Array.from(Array(floor + 1), () => Array(unit).fill(0));

  for (let j = 1; j <= unit; j++) {
    apartment[0][j - 1] = j;
  }

  for (let l = 1; l <= floor; l++) {
    apartment[l][0] = apartment[l - 1][0];
    for (let n = 2; n <= unit; n++) {
      apartment[l][n - 1] = apartment[l - 1][n - 1] + apartment[l][n - 2];
    }
  }

  console.log(apartment[floor][unit - 1]);
}
