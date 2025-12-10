// src/main.js
// Entry point: loads JSON input, runs Prim + DFS + greedy scheduler.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { primMST } from "./prim.js";
import { buildMSTAdjList, dfsOrder } from "./dfs.js";
import { buildSchedule } from "./scheduler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadDay(filename) {
  const fullPath = path.join(__dirname, "..", "data", filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw);
}

function main() {
  const day = loadDay("example-day.json");

  const jobs = day.jobs;
  const workers = day.workers;
  const distMatrix = day.distances;

  console.log("=== 3 Hands Cleaning – Daily Scheduler ===\n");

  console.log(`Jobs for the day: ${jobs.length}`);
  console.log(`Workers available: ${workers.length}\n`);

  // 1) Build MST with Prim
  const parent = primMST(distMatrix);

  // 2) DFS on the MST to get visiting order
  const adj = buildMSTAdjList(parent);
  const order = dfsOrder(adj, 0);

  console.log("MST parent array:", parent);
  console.log("DFS order (including base vertex 0):", order, "\n");

  // 3) Build greedy worker schedule
  const schedule = buildSchedule(jobs, workers, distMatrix, order);

  // 4) Print a human-readable summary
  for (const ws of schedule.workerSchedules) {
    console.log(`Worker ${ws.workerName} (id=${ws.workerId})`);
    if (ws.route.length === 0) {
      console.log("  No assigned jobs.");
    } else {
      ws.route.forEach(r => {
        console.log(
          `  Job ${r.jobId} (${r.label}) ` +
          `from ${r.startHHMM} to ${r.finishHHMM} ` +
          `(travel ${r.travelMinutes} min)`
        );
      });
      console.log(`  Total travel: ${ws.totalTravelMinutes} minutes`);
    }
    console.log();
  }

  if (schedule.unassignedJobs.length > 0) {
    console.log("Unassigned jobs (could not fit in any worker schedule):");
    schedule.unassignedJobs.forEach(j =>
      console.log(`  Job ${j.id} – ${j.addressLabel}`)
    );
  } else {
    console.log("All jobs assigned.");
  }

  // Optionally write JSON output
  const outPath = path.join(__dirname, "..", "data", "example-schedule.json");
  fs.writeFileSync(outPath, JSON.stringify(schedule, null, 2), "utf8");
  console.log(`\nSchedule saved to data/example-schedule.json`);
}

main();
