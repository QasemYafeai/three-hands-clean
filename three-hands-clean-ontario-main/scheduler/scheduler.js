import { buildTravelGraph } from './graph.js';

/**
 * Greedy job scheduler for 3 Hands Cleaning.
 *
 * Idea:
 *  - Build complete weighted graph of base + jobs (nodes) using Euclidean distances.
 *  - For each worker:
 *      - start at base
 *      - repeatedly choose the *nearest unassigned job* that can still be done
 *        without exceeding maxMinutes (including returning to base at the end)
 *      - stop when no more feasible jobs remain for this worker
 *
 * Time: for W workers, J jobs -> Θ(W * J^2) in the worst case.
 */

/**
 * Build a schedule from the given input object from jobs-sample.json.
 * Returns { schedule, unassignedJobs, mst }.
 */
export function buildSchedule(input) {
  const { base, workers, jobs } = input;

  // Graph over base + jobs
  const graph = buildTravelGraph(base, jobs);
  const mst = graph.primMST(base.id);  // for portfolio / analysis

  // Helper for travel time in minutes between two nodes by id
  function travel(aId, bId) {
    return graph.getWeight(aId, bId);
  }

  const unassigned = new Map(); // id -> job
  for (const job of jobs) {
    unassigned.set(job.id, job);
  }

  const schedule = [];

  for (const worker of workers) {
    const maxMinutes = worker.maxMinutes;
    let current = base.id;
    let timeUsed = 0;
    const route = [base.id];
    const jobsDone = [];

    while (true) {
      let bestJob = null;
      let bestTravel = Infinity;

      for (const job of unassigned.values()) {
        const toJob = travel(current, job.id);
        const backToBase = travel(job.id, base.id);

        // time if we add this job now and still go back to base
        const projected =
          timeUsed + toJob + job.duration + backToBase;

        if (projected <= maxMinutes) {
          if (toJob < bestTravel) {
            bestTravel = toJob;
            bestJob = job;
          }
        }
      }

      if (!bestJob) {
        // No feasible job left for this worker
        break;
      }

      // Take the chosen job
      timeUsed += bestTravel + bestJob.duration;
      current = bestJob.id;
      route.push(bestJob.id);
      jobsDone.push(bestJob);
      unassigned.delete(bestJob.id);
    }

    // go back to base if we left it
    if (current !== base.id) {
      timeUsed += travel(current, base.id);
      route.push(base.id);
    }

    schedule.push({
      workerId: worker.id,
      route,
      minutesUsed: timeUsed,
      jobs: jobsDone.map(j => j.id)
    });
  }

  const unassignedJobs = Array.from(unassigned.values()).map(j => j.id);

  return { schedule, unassignedJobs, mst };
}
