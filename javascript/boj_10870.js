/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 4673
 * Level: Bronze II
 * Algorithm: Math, Dynamic Programing
 */

/* Pseudocode *
입력값이 2 미만일 경우 input을 그대로 출력한다.
입력값이 2 이상일 경우 입력값 만큼의 크기를 가진 배열을 생성한다.
배열의 0번쨰 숫자는 0, 1번쨰 숫자는 1로 설정한다.
배열의 i번째 숫자는 i-1번쨰 숫자와 i-2번쨰 숫자의 합이므로, input만큼 반복하며 배열을 채운다.
배열의 input번째 숫자를 출력한다.
*/

const input = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "example.txt"
  )
);

if (input < 2) console.log(input);
else {
  const answerArr = new Array(input);
  answerArr[0] = 0;
  answerArr[1] = 1;
  for (let i = 2; i < input + 1; i++) {
    answerArr[i] = answerArr[i - 1] + answerArr[i - 2];
  }
  console.log(answerArr[input]);
}

// 재귀 함수를 사용한 다른 풀이
function solution(input) {
  if (input < 2) return input;
  else return solution(input - 1) + solution(input - 2);
}

console.log(solution(input));
