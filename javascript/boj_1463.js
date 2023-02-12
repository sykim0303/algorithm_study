/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1463
 * Level: Silver III
 * Algorithm: Dynamic Programing
 */

/* Pseudocode *
N에서 M을 연결하는 n개의 다리를 겹치지 않게 놓는 방법은 N에서 n개를 뽑고, M에서 n개를 뽑는 방법과 같다.
일단 뽑아두면, 겹치지 않게 연결할 수 있는 방법은 한가지씩 밖에 존재하지 않는다.
따라서 nCn * mCn이 문제의 해답인데, nCn은 1이므로 mCn의 값을 구하면 된다.
mCn은 m부터 1씩 빼가며 n개를 곱한 후 n!로 나눈 값이다.
n, m이 30이 될 수도 있으므로, 숫자 선언을 BigInt로 해준 뒤 계산했다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

const total = Number(input);
const DP = new Array(total + 1).fill(0);

for (let i = 2; i <= total; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  if (i % 3 === 0) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
}

console.log(DP[total]);
