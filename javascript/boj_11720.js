/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 11720
 * Level: Bronze IV
 * Algorithm: String
 */

/* Pseudocode *
받은 데이터 중 연산해야하는 문자열을 전개하여 배열(dataArr)로 변환.
전개한 배열을 리듀서 함수를 이용하여 합을 구하고 return 후 출력.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")[1];

const dataArr = [...input];

console.log(
  dataArr.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  })
);
