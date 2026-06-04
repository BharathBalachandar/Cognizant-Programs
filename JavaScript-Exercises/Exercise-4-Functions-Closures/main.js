let events = [];

function addEvent(name, category) {
    events.push({ name, category });
}

function registerUser(eventName) {
    console.log(`Registered for ${eventName}`);
}

function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = registrationCounter();

addEvent("Music Festival", "Music");
addEvent("Dance Show", "Dance");

console.log(filterEventsByCategory("Music"));

console.log(counter());
console.log(counter());