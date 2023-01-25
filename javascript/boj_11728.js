/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 11728
 * Level: Silver V
 * Algorithm: Two Pointer, Sort
 */

/* Pseudocode *
solve 1 -> 단순히 배열을 합쳐서 정렬한다.
solve2 -> 투포인트 알고리즘을 사용한다.
  반복문을 돌아 aArr와 bArr 배열에서 순서대로 하나의 숫자를 가져오고, 두 숫자를 비교해 작은 수를 sortArr에 push하고 해당 배열에 속한 index를 +1해준다.
  이때 aArr과 bArr 중 어느 하나의 배열이 비게 되었을 경우, 반복문을 빠져나와 숫자가 남은 배열의 남은 숫자들을 index로 slice해서 전부 push 해준다.

1번 방법이 단순하지만 그만큼 정렬해야하는 배열이 커져서 시간 초과가 날 줄 알았는데, 오히려 2번 방법보다 메모리를 덜 먹었고 2번 방법에서 오히려 시간 초과로 애를 먹었다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const aArr = input[1].split(" ").map((a) => parseInt(a));
const bArr = input[2].split(" ").map((b) => parseInt(b));

// solve 1
console.log([...aArr, ...bArr].sort().join(" "));

// solve 2
const sortArr = [];
let aIndex = 0;
let bIndex = 0;
while (aIndex < aArr.length && bIndex < bArr.length) {
  const aNumber = aArr[aIndex];
  const bNumber = bArr[bIndex];
  if (aNumber < bNumber) {
    sortArr.push(aNumber);
    aIndex++;
  } else {
    sortArr.push(bNumber);
    bIndex++;
  }
}
if (aIndex < aArr.length) {
  sortArr.push(...aArr.slice(aIndex));
}
if (bIndex < bArr.length) {
  sortArr.push(...bArr.slice(bIndex));
}
console.log(sortArr.join(" "));
