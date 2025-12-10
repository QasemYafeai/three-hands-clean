Problem Overview

3 Hands Cleaning has multiple jobs per day, each with:

A location

A service duration

A time window

A limited number of workers and vehicles

Scheduling is currently manual and inefficient.
Jobs may be far apart, workers get overbooked, and travel time is not minimized.

Goal:
Automatically generate a daily schedule that assigns jobs to workers while reducing travel time and avoiding overtime.

 Solution Overview

The algorithm models each day as a graph:

Each job = a vertex

Home base = extra vertex

Edge weight = travel time between jobs

From this, the system:

Sorts jobs by time window

Builds a complete weighted graph (travel times)

Computes an MST using Prim’s algorithm

Runs DFS on the MST to get an approximate route (TSP heuristic)

Greedily assigns jobs to workers based on feasibility (time windows, shift length)

Stores each worker's schedule as a doubly linked list

The result is a realistic, high-quality schedule suitable for small cleaning teams.

Algorithms & Data Structures Used
Core Data Structures

Dynamic arrays → store jobs

Hash table → store customer records

Adjacency lists → represent the job graph

Binary heap / priority queue → Prim’s algorithm

Doubly linked list → per-worker schedule

Red-black tree (optional) → query “next job after time X”

| Step                     | Algorithm                   | Time        |
| ------------------------ | --------------------------- | ----------- |
| Sort jobs by time window | Merge Sort                  | Θ(n log n)  |
| Build weighted graph     | Pairwise compute edges      | Θ(n²)       |
| Compute MST              | Prim’s (greedy)             | Θ(n² log n) |
| Build route              | DFS                         | Θ(n)        |
| Assign jobs              | Greedy + data structure ops | Θ(n log n)  |


Overall runtime per day:
T(n) = Θ(n² log n)

Running the Scheduler
cd scheduler
node runScheduler.js

The script loads jobs-sample.json, computes:
MST
DFS route
Worker schedules

Mermaid Diagrams
Architecture Diagram
graph TD
    A[Input JSON<br/>base, workers, jobs] --> B[Build complete weighted graph<br/>(base + jobs)]
    B --> C[Prim's Algorithm<br/>Compute MST<br/>(minimal network of locations)]
    B --> D[Greedy Scheduler<br/>per worker]
    D --> E[Daily schedule<br/>(routes + times)]
    D --> F[Unassigned jobs<br/>(capacity issues)]
    C --> G[Portfolio analysis:<br/>MST total distance vs. schedule travel]

Greedy Worker Algorithm
flowchart TD
    S[Start worker] --> I[Set current = base<br/>timeUsed = 0]
    I --> L{Any unassigned job<br/>that fits in remaining time<br/>(including return to base)?}
    L -->|No| R[Add edge back to base<br/>Finish worker route]
    L -->|Yes| P[Pick nearest feasible job<br/>(min travel distance)]
    P --> U[Update route<br/>timeUsed += travel + duration<br/>current = job]
    U --> L


