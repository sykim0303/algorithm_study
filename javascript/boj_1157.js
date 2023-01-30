/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1157
 * Level: Bronze I
 * Algorithm: String
 */

/* Pseudocode *
문자열을 알파벳 하나씩을 요소로 갖는 배열로 만든 후 순회를 돈다.
Map을 만든 후 Map에 알파벳과 알파벳의 개수를 저장한다.
Map을 2차원 배열로 전개한 후 개수의 내림차순으로 정렬하여 정렬된 배열의 길이가 1보다 크고, 배열의 0번쨰 요소와 1번째 요소의 개수가 같다면 ?를 출력한다.
이외의 경우에는 배열의 0번째 요소의 알파벳을 출력한다.
*/

const input = [
  ...require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
    .toString()
    .trim(),
];

const map = new Map();
input.forEach((item) => {
  const alphabet = item.toUpperCase();
  if (map.has(alphabet)) {
    map.set(alphabet, map.get(alphabet) + 1);
  } else {
    map.set(alphabet, 1);
  }
});

const sortedMap = [...map].sort((a, b) => b[1] - a[1]);
if (sortedMap.length > 1 && sortedMap[0][1] === sortedMap[1][1]) {
  console.log("?");
} else {
  console.log(sortedMap[0][0]);
}
