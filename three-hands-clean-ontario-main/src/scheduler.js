// src/scheduler.js
// Greedy assignment of jobs to workers following a DFS order on the MST.

// time helpers
function minutesToHHMM(m) {
  const h = Math.floor(m / 60);
  const min = m % 60;
  return `${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
}

// Build schedule
export function buildSchedule(jobs, workers, distMatrix, visitOrder) {
  // vertex 0 is base, jobs use indices 1..n
  const jobByVertex = new Map();
  jobs.forEach((job, idx) => {
    jobByVertex.set(idx + 1, job);
  });

  // per-worker state
  const workerStates = workers.map(w => ({
    worker: w,
    currentVertex: 0,                 // start at base
    currentTime: w.shiftStart,        // minutes from midnight
    route: [],
    totalTravel: 0
  }));

  const unassigned = [];

  // skip vertex 0 in visitOrder; remaining are job vertices
  for (const v of visitOrder) {
    if (v === 0) continue;
    const job = jobByVertex.get(v);
    if (!job) continue;

    let bestWorkerIndex = -1;
    let bestFinish = Infinity;
    let bestTravel = Infinity;

    // Try to find the best worker who can take this job
    workerStates.forEach((state, idx) => {
      const travel = distMatrix[state.currentVertex][v];

      // earliest we can start after driving there
      const earliestStart = Math.max(
        state.currentTime + travel,
        job.timeWindowStart
      );
      const finish = earliestStart + job.duration;

      const withinJobWindow = finish <= job.timeWindowEnd;
      const withinShift = finish <= state.worker.shiftEnd;

      if (withinJobWindow && withinShift) {
        if (finish < bestFinish ||
            (finish === bestFinish && travel < bestTravel)) {
          bestFinish = finish;
          bestTravel = travel;
          bestWorkerIndex = idx;
        }
      }
    });

    if (bestWorkerIndex === -1) {
      // no one can take this job respecting constraints
      unassigned.push(job);
      continue;
    }

    // assign job to chosen worker
    const state = workerStates[bestWorkerIndex];
    const travel = distMatrix[state.currentVertex][v];
    const start = Math.max(
      state.currentTime + travel,
      job.timeWindowStart
    );
    const finish = start + job.duration;

    state.route.push({
      jobId: job.id,
      label: job.addressLabel,
      start,
      finish,
      startHHMM: minutesToHHMM(start),
      finishHHMM: minutesToHHMM(finish),
      travelMinutes: travel
    });

    state.totalTravel += travel;
    state.currentTime = finish;
    state.currentVertex = v;
  }

  // Optionally: return all to base & add travel
  workerStates.forEach(state => {
    if (state.currentVertex !== 0) {
      const backTravel = distMatrix[state.currentVertex][0];
      state.totalTravel += backTravel;
      state.currentVertex = 0;
    }
  });

  // build clean output object
  const scheduleOutput = {
    workerSchedules: workerStates.map(state => ({
      workerId: state.worker.id,
      workerName: state.worker.name,
      route: state.route,
      totalTravelMinutes: state.totalTravel
    })),
    unassignedJobs: unassigned
  };

  return scheduleOutput;
}
