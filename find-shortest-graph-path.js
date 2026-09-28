// Expected output: A -> B -> D -> E
// The first item gives the vertex count; remaining items give vertices and edges.
const input = ['5', 'A', 'B', 'C', 'D', 'E', 'A-B', 'A-C', 'B-D', 'C-D', 'D-E'];

function shortestPath(items, start, end) {
  const count = Number(items[0]);
  const graph = Object.fromEntries(items.slice(1, count + 1).map((v) => [v, []]));
  for (const edge of items.slice(count + 1)) {
    const [a, b] = edge.split('-');
    graph[a].push(b);
    graph[b].push(a);
  }
  const queue = [[start]];
  const visited = new Set([start]);
  for (const path of queue) {
    const current = path[path.length - 1];
    if (current === end) return path;
    for (const next of graph[current]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }
  return [];
}

console.log(shortestPath(input, 'A', 'E').join(' -> '));
