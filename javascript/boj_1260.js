/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1260
 * Level: Silver II
 * Algorithm: Graph Traversal
 */

/* Pseudocode *
const graph = new Array(total+1).fill([])로 했다가 애를 먹었다.
fill()이 얕은 복사라 복사 시 모든 행이 같은 값을 가져 push할 때 모든 행에 같은 값을 넣어줬기 때문.

입력값을 순회하여 index와 연결되는 값의 배열을 담은 이중 배열로 만든다.
이 배열 graph를 적절히 정렬하여, BFS/DFS 모두 startNum부터 시작해 remains의 값이 0이 될 때까지 반복문을 실행한다.
BFS는 remains의 앞에서부터 current를 가져오고(Queue), DFS는 remains의 뒤에서부터 current를 가지고 온다(Stack).
이 때 currnet를 visited에 담아 반환하고, 반환된 값을 join해 출력한다.
*/

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [total, edge, startNum] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: total + 1 }, () => []);

for (let i = 0; i < edge; i++) {
  const [curr, next] = input[i].split(" ").map(Number);

  graph[curr].push(next);
  graph[next].push(curr);
}

const BFS = (startNum) => {
  const visited = [];
  const remains = [startNum];

  while (remains.length !== 0) {
    const current = remains.shift();

    if (!visited.includes(current)) {
      visited.push(current);
      remains.push(...graph[current]);
    }
  }

  return visited;
};

const DFS = (startNum) => {
  const visited = [];
  const remains = [startNum];

  while (remains.length !== 0) {
    const current = remains.pop();

    if (!visited.includes(current)) {
      visited.push(current);
      remains.push(...graph[current]);
    }
  }

  return visited;
};

graph.forEach((v) => v.sort((a, b) => b - a));
const dfs = DFS(startNum);
graph.forEach((v) => v.sort((a, b) => a - b));
const bfs = BFS(startNum);

console.log(dfs.join(" "));
console.log(bfs.join(" "));
