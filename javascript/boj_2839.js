/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 2839
 * Level: Silver IV
 * Algorithm: Dynamic Programing
 */

/* Pseudocode *
DP인데 Greedy로 풀었다.
1, 2, 4, 7을 제외한 모든 수를 5와 3의 합으로 만들 수 있다.
  1. 입력값이 1, 2, 4, 7 일 때는 -1을 출력한다.
  2. 입력값을 5로 나눈 나머지가 0일떄는 몫을 그대로 출력한다.
  3. 입력값을 5로 나눈 나머지가 1일 떄는 몫에서 1을 뺴주고, 남은 값 6(1+5)을 3으로 나눈 2를 더한 값을 출력한다.
  4. 입력값을 5로 나눈 나머지가 2일 때는 몫에서 2를 뺴주고, 남은 값 12(2+10)를 3으로 나눈 4를 더한 값을 출력한다.
  5. 입력값을 5로 나눈 나머지가 3일 때는 몫에 남은 값 3을 3으로 나눈 1을 더한 값을 출력한다.
  6. 입력값을 5로 나눈 나머지가 4일 때는 몫에서 1을 뺴주고, 남은 값 9(4+5)를 3으로 나눈 3을 더한 값을 출력한다.
*/

const number = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let answer = 0;

const wrongNumber = ["1", "2", "4", "7"];

if (wrongNumber.includes(number)) answer = -1;
else {
  const fiveRemainder = Number(number) % 5;
  const fiveQuotient = parseInt(Number(number) / 5);

  if (fiveRemainder === 0) answer = fiveQuotient;
  else if (fiveRemainder === 1 || fiveRemainder === 3)
    answer = fiveQuotient + 1;
  else if (fiveRemainder === 2 || fiveRemainder === 4)
    answer = fiveQuotient + 2;
}

console.log(answer);
