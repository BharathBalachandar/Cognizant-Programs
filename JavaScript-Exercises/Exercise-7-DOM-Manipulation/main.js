const events = [
    "Music Festival",
    "Dance Show",
    "Art Workshop"
];

const container =
    document.querySelector("#eventContainer");

events.forEach(event => {

    const card =
        document.createElement("div");

    card.textContent = event;

    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "5px";

    container.appendChild(card);
});