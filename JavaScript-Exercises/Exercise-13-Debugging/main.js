document
.getElementById("submitBtn")
.addEventListener("click",
function(){

    console.log(
    "Step 1: Button Clicked"
    );

    let user = {

        name: "Bharath",
        email: "bharath@example.com"
    };

    console.log(
    "Step 2: User Data Created"
    );

    debugger;

    console.log(
    "Step 3: Ready to Send Request"
    );

    console.log(user);
});