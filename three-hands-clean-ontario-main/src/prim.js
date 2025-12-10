// src/prim.js
// Prim's algorithm using an adjacency matrix.
// Returns: parent[] where parent[v] is the parent of v in the MST (parent[0] = -1).

export function primMST(distMatrix) {
  const n = distMatrix.length;
  const parent = Array(n).fill(-1);
  const inMST = Array(n).fill(false);
  const key = Array(n).fill(Infinity);

  key[0] = 0; // start from base (vertex 0)

  for (let count = 0; count < n - 1; count++) {
    // pick u not in MST with smallest key[u]
    let u = -1;
    let best = Infinity;
    for (let v = 0; v < n; v++) {
      if (!inMST[v] && key[v] < best) {
        best = key[v];
        u = v;
      }
    }

    if (u === -1) break; // disconnected safeguard

    inMST[u] = true;

    // update keys of neighbors
    for (let v = 0; v < n; v++) {
      const w = distMatrix[u][v];
      if (!inMST[v] && w > 0 && w < key[v]) {
        parent[v] = u;
        key[v] = w;
      }
    }
  }

  return parent;
}
