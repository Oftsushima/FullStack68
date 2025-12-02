const startTime = Date.now();

function someHeavyTask() {
  for (let i = 0; i < 5e7; i++) {
    Math.sqrt(i);
  }
}

someHeavyTask();

const endTime = Date.now();
const duration = endTime - startTime;

console.log("Heavy task took " + duration + " milliseconds.");
