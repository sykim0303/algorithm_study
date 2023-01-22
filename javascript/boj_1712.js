/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1712
 * Level: Bronze II
 * Algorithm: Math
 */

/* Pseudocode *
제품 가격(productPrice) - 변동 비용(variableCost)으로 마진(margin) 값 산출.
Math.floor(fixedCost / margin) + 1로 손익분기점 산출.
단, 마진이 0이하일 경우 손익분기점이 존재하지 않으므로 -1을 출력. 
*/

const [fixedCost, variableCost, productPrice] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const margin = Number(productPrice) - Number(variableCost);
const productAmount = Math.floor(Number(fixedCost) / margin) + 1;

console.log(margin <= 0 ? -1 : productAmount);
