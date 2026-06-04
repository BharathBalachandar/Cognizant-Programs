document
.getElementById("registrationForm")
.addEventListener("submit",
function(event){

    event.preventDefault();

    const form = event.target;

    const name =
        form.elements["name"].value;

    const email =
        form.elements["email"].value;

    const selectedEvent =
        form.elements["event"].value;

    if(name === "" || email === ""){

        document
        .getElementById("error")
        .textContent =
        "All fields are required";

        return;
    }

    document
    .getElementById("error")
    .textContent = "";

    console.log(name);
    console.log(email);
    console.log(selectedEvent);

    alert("Registration Successful");
});