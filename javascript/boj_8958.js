/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 8958
 * Level: Bronze II
 * Algorithm: String / Implementation
 */

/* Pseudocode *
점수를 구해야하는 문자열에서 연속되는 X를 문자 '/'로 치환 후 '/'로 split하여 O로 나누어진 배열로 변환.
새로운 배열을 순회하면서 각 item의 length를 구하고, 1부터 length까지의 합을 산출, 리듀서 함수로 산출 값을 더해 최종 점수를 반환.
반환된 배열을 '\n'으로 join하여 결과값 출력.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(/\n/);

input.shift();

const map = input.map((string) => {
  const stringArr = string.replace(/X+/g, "/").split("/");
  const sumArr = stringArr.map((item) => {
    const length = item.length;
    return (length * (length + 1)) / 2;
  });
  return sumArr.reduce((pre, curr) => pre + curr);
});

console.log(map.join("\n"));
