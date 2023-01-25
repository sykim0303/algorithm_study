/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 14916
 * Level: Silver V
 * Algorithm: Greedy
 */

/* Pseudocode *
거스름돈을 거슬러줄 수 없는 경우는 1일 떄와 3일 때 뿐이므로, 1과 3일 떄는 -1을 출력한다.
나머지 경우에는 최대한 5원을 거슬러줄 수 있도록 주어진 값을 5로 나눈 몫(fiveChange)을 구한다.
이때의 나머지가 짝수라면 남은 액수를 2로 나눈 몫(twoChange)을 구해 fiveChange+twoChange를 출력한다.
나머지가 홀수라면 남은 액수에 5를 더해 2로 나눈 몫(twoChange)을 구해 fiveChange-1+twoChange를 출력한다.
*/

const input = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "example.txt"
  )
);

if (input === 1 || input === 3) {
  console.log(-1);
} else {
  const fiveChange = parseInt(input / 5);
  const remainder = (input % 5) % 2;
  if (remainder === 0) {
    const twoChange = parseInt((input - fiveChange * 5) / 2);
    console.log(fiveChange + twoChange);
  } else {
    const twoChange = parseInt((input - 5 * (fiveChange - 1)) / 2);
    console.log(fiveChange - 1 + twoChange);
  }
}
