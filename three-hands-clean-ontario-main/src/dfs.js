// src/dfs.js
// Build adjacency list from MST parent[] and perform DFS from base (0).
// Returns DFS order of vertices (excluding base if you want just jobs).

export function buildMSTAdjList(parent) {
  const n = parent.length;
  const adj = Array.from({ length: n }, () => []);
  for (let v = 1; v < n; v++) {
    const p = parent[v];
    if (p !== -1) {
      adj[p].push(v);
      adj[v].push(p);
    }
  }
  return adj;
}

export function dfsOrder(adj, start = 0) {
  const n = adj.length;
  const visited = Array(n).fill(false);
  const order = [];

  function dfs(u) {
    visited[u] = true;
    order.push(u);
    for (const v of adj[u]) {
      if (!visited[v]) dfs(v);
    }
  }

  dfs(start);
  return order;
}
