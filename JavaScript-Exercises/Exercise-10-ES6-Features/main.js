const events = [
    {
        name: "Music Festival",
        category: "Music"
    },
    {
        name: "Dance Show",
        category: "Dance"
    }
];

function showEvent(
    eventName = "Default Event"
){

    console.log(eventName);
}

showEvent();

const { name, category } =
    events[0];

console.log(name);
console.log(category);

const copiedEvents =
    [...events];

console.log(copiedEvents);