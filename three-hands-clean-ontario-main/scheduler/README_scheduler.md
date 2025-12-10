# 3 Hands Cleaning – Job Scheduler (Algorithm Portfolio Piece)

This folder contains a small algorithmic prototype for scheduling daily cleaning jobs
for **3 Hands Cleaning**. The goal is to:

- Minimize total travel time between jobs.
- Respect worker capacity (maximum minutes per day).
- Produce a daily route for each worker (sequence of jobs + expected time).

We model houses as **nodes** in a graph, and driving times as **edge weights**.
We then use a combination of:

- A **graph/MST step** (Prim-style thinking) to reason about the minimal network of locations.
- A **greedy scheduling algorithm** per worker that always picks the **nearest feasible job** next.

---

## Architecture / Data Flow

The overall flow of data in the scheduler is:

```mermaid
graph TD
    A[Input JSON<br/>base, workers, jobs] --> B[Build complete weighted graph<br/>(base + jobs)]
    B --> C[Prim's Algorithm<br/>Compute MST<br/>(minimal network of locations)]
    B --> D[Greedy Scheduler<br/>per worker]
    D --> E[Daily schedule<br/>(routes + times)]
    D --> F[Unassigned jobs<br/>(capacity issues)]
    C --> G[Portfolio analysis:<br/>MST total distance vs. schedule travel]
