

// Small undirected weighted graph backed by adjacency matrix.
export class Graph {
  constructor() {
    this.nodes = [];           // index -> name
    this.indexOf = new Map();  // name -> index
    this.matrix = [];          // matrix[i][j] = weight (Infinity if no edge)
  }

  addNode(name) {
    if (this.indexOf.has(name)) return this.indexOf.get(name);
    const idx = this.nodes.length;
    this.nodes.push(name);
    this.indexOf.set(name, idx);

    // expand matrix
    for (const row of this.matrix) {
      row.push(Infinity);
    }
    const newRow = new Array(this.nodes.length).fill(Infinity);
    newRow[idx] = 0;
    this.matrix.push(newRow);
    return idx;
  }

  addUndirectedEdge(a, b, weight) {
    const i = this.addNode(a);
    const j = this.addNode(b);
    this.matrix[i][j] = weight;
    this.matrix[j][i] = weight;
  }

  getWeight(a, b) {
    const i = this.indexOf.get(a);
    const j = this.indexOf.get(b);
    if (i == null || j == null) return Infinity;
    return this.matrix[i][j];
  }

  /**
   * Prim's algorithm for MST, starting from node name `start`.
   * Returns { edges: [{from,to,weight}], totalWeight }.
   * Time: Θ(V^2).
   */
  primMST(start) {
    const n = this.nodes.length;
    if (n === 0) return { edges: [], totalWeight: 0 };

    const startIdx = this.indexOf.get(start) ?? 0;
    const key = new Array(n).fill(Infinity);
    const parent = new Array(n).fill(null);
    const inMST = new Array(n).fill(false);

    key[startIdx] = 0;

    for (let k = 0; k < n; k++) {
      // pick min key[u] among vertices not yet in MST
      let u = -1;
      let best = Infinity;
      for (let i = 0; i < n; i++) {
        if (!inMST[i] && key[i] < best) {
          best = key[i];
          u = i;
        }
      }
      if (u === -1) break; 
      inMST[u] = true;

      // relax neighbors
      for (let v = 0; v < n; v++) {
        const w = this.matrix[u][v];
        if (!inMST[v] && w < key[v]) {
          key[v] = w;
          parent[v] = u;
        }
      }
    }

    const edges = [];
    let totalWeight = 0;
    for (let v = 0; v < n; v++) {
      const p = parent[v];
      if (p != null) {
        const from = this.nodes[p];
        const to = this.nodes[v];
        const w = this.matrix[p][v];
        edges.push({ from, to, weight: w });
        totalWeight += w;
      }
    }
    return { edges, totalWeight };
  }
}

/**
 * Build a complete graph over base + jobs using Euclidean distance as weight.
 * Nodes are base.id and each job.id.
 */
export function buildTravelGraph(base, jobs) {
  const g = new Graph();
  const all = [base, ...jobs];

  // ensure all nodes created
  for (const item of all) {
    g.addNode(item.id);
  }

  // fully connect with symmetric distances
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      const a = all[i];
      const b = all[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.round(Math.hypot(dx, dy)); // minutes of travel per unit
      g.addUndirectedEdge(a.id, b.id, dist);
    }
  }

  return g;
}
