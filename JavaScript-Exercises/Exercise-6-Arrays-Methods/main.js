let events = [
    "Music Festival",
    "Dance Show",
    "Workshop on Baking"
];

events.push("Food Carnival");

console.log("All Events:");
console.log(events);

let musicEvents = events.filter(event =>
    event.includes("Music")
);

console.log("Music Events:");
console.log(musicEvents);

let displayCards = events.map(event =>
    `Event Card: ${event}`
);

console.log(displayCards);