const events = [
    { name: "Music Festival", seats: 10 },
    { name: "Dance Show", seats: 0 },
    { name: "Art Workshop", seats: 5 }
];

events.forEach(event => {
    if (event.seats > 0) {
        console.log(event.name);
    }
});

try {
    let seats = 0;

    if (seats <= 0) {
        throw new Error("No seats available");
    }

} catch (error) {
    console.log(error.message);
}