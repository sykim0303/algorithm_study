/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 10828
 * Level: Silver IV
 * Algorithm: Stack
 */

/* Pseudocode *
입력 값을 순회하면서 각 명령에 따라 해당하는 내용이 수행될 수 있도록 switch문을 작성했다.
처음에는 각 명령을 수행할 때마다 console을 찍어 답을 출력하려고 했는데, 이 경우 console.log()가 시간을 많이 잡아먹기 때문에 시간 초과가 났다.
따라서 출력해야하는 명령의 경우 해당 답안을 answer 배열에 추가한 후, join하여 한번에 console.log()로 출력해주는 방법으로 변경하였다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const total = Number(input.shift());
const stackArr = [];
const answer = [];

for (let i = 0; i < total; i++) {
  const [method, value] = input.shift().split(" ");
  switch (method) {
    case "push":
      stackArr.push(Number(value));
      break;

    case "pop":
      const pop = stackArr.pop();
      answer.push(pop ? pop : -1);
      break;

    case "top":
      const top = stackArr[stackArr.length - 1];
      answer.push(top ? top : -1);
      break;

    case "empty":
      answer.push(stackArr.length ? 0 : 1);
      break;

    case "size":
      answer.push(stackArr.length);
      break;
  }
}
console.log(answer.join("\n"));
