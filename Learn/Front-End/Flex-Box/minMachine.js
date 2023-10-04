class Event {
    constructor(time, isStart) {
        this.time = time;
        this.isStart = isStart;
    }
}

function minMachinesRequired(start, end) {
    const n = start.length;

    if (n <= 1) {
        return n; // No need for machines if there is only one or no tasks
    }

    const events = [];
    for (let i = 0; i < n; i++) {
        events.push(new Event(start[i], true));
        events.push(new Event(end[i], false));
    }

    // Sort events
    events.sort((a, b) => {
        // Sort events based on time and then by whether it is a start event
        if (a.time !== b.time) {
            return a.time - b.time;
        }
        return a.isStart ? -1 : 1;
    });

    // Initialize variables
    let machines = 0;
    let currentMachines = 0;

    // Iterate through the events
    for (const event of events) {
        if (event.isStart) {
            currentMachines++;
            machines = Math.max(machines, currentMachines);
        } else {
            currentMachines--;
        }
    }

    return machines;
}

// Example usage
const start = [1, 8, 3, 9, 6];
const end = [7, 9, 6, 14, 7];

const result = minMachinesRequired(start, end);
console.log("Minimum number of machines required:", result);
