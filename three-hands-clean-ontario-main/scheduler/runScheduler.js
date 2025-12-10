import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildSchedule } from './scheduler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath =
  process.argv[2] || path.join(__dirname, 'jobs-sample.json');

const raw = fs.readFileSync(inputPath, 'utf-8');
const input = JSON.parse(raw);

const { schedule, unassignedJobs, mst } = buildSchedule(input);

console.log('=== 3 Hands Cleaning – Greedy Job Scheduler ===\n');
console.log(`Input file: ${inputPath}\n`);

console.log('Minimum-spanning network (Prim’s MST on locations):');
for (const e of mst.edges) {
  console.log(`  ${e.from} --${e.weight}--> ${e.to}`);
}
console.log(`Total MST distance: ${mst.totalWeight}\n`);

console.log('Daily schedule per worker:');
for (const block of schedule) {
  console.log(`\nWorker: ${block.workerId}`);
  console.log(`  Route: ${block.route.join(' -> ')}`);
  console.log(`  Jobs: ${block.jobs.join(', ') || '(none)'}`);
  console.log(`  Minutes used (travel + cleaning): ${block.minutesUsed}`);
}

if (unassignedJobs.length > 0) {
  console.log('\n!!! Unassigned jobs (day is overloaded):');
  console.log('   ', unassignedJobs.join(', '));
} else {
  console.log('\nAll jobs assigned within worker time limits ✅');
}
