/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 2748
 * Level: Bronze I
 * Algorithm: Math, Dynamic Programing
 */

/* Pseudocode *
입력값이 2 미만일 경우 input을 그대로 출력한다.
입력값이 2 이상일 경우 입력값 만큼의 크기를 가진 배열을 생성한다.
배열의 0번쨰 숫자는 0, 1번쨰 숫자는 1로 설정한다.
배열의 i번째 숫자는 i-1번쨰 숫자와 i-2번쨰 숫자의 합이므로, input만큼 반복하며 배열을 채운다.
배열의 input번째 숫자를 출력한다.

단, 이 경우 input이 90까지 들어올 수 있으므로, BigInt 개체를 사용하여 배열에 넣어준다.
*/

const input = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "example.txt"
  )
);

if (input < 2) console.log(input);
else {
  const DP = new Array(input);
  DP[0] = 0;
  DP[1] = 1;
  for (let i = 2; i < input + 1; i++) {
    DP[i] = BigInt(DP[i - 1]) + BigInt(DP[i - 2]);
  }
  console.log(DP[input].toString());
}
