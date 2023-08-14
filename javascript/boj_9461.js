/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 9461
 * Level: Silver III
 * Algorithm: Math, Dynamic Programing
 */

/* Pseudocode *
  P(1)부터 P(5)까지는 규칙이 없기 때문에 P(6)부터 P(N) = P(N-1) + P(N-5) 의 규칙으로 재귀함수 풀이를 하려고 했지만 시간 초과.
  주어지는 N이 100이하이기 때문에 처음부터 P(1)부터 P(100)까지의 정답 배열을 만들어두고 시작했더니 통과함.
*/

const [total, ...res] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const input = res.map((item) => Number(item));

const baseArr = [0, 1, 1, 1, 2, 2];
const answer = [];

// 주어지는 N이 100 이하이기 때문에 정답 배열을 만들어놓고 시작하는 방법
for (let i = 6; i <= 100; i++) {
  const number = baseArr[i - 1] + baseArr[i - 5];
  baseArr.push(number);
}

for (let i = 0; i < +total; i++) {
  const number = input[i];
  answer.push(baseArr[number]);
}

console.log(answer.join("\n"));

// 재귀함수 풀이 (시간 초과)
for (let i = 1; i < +total; i++) {
  const number = input[i];

  if (number <= 5) {
    answer.push(baseArr[number]);
  } else {
    answer.push(solution(number));
  }
}

function solution(number) {
  if (number <= 5) {
    return baseArr[number];
  }
  return solution(number - 1) + solution(number - 5);
}

console.log(answer.join("\n"));
