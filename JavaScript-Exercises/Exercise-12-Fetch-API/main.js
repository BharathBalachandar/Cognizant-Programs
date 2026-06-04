document
.getElementById("submitBtn")
.addEventListener("click",
function(){

    const userData = {

        name: "Bharath",
        email: "bharath@example.com"
    };

    setTimeout(() => {

        fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body:
            JSON.stringify(userData)
        })

        .then(response =>
            response.json()
        )

        .then(data => {

            console.log(data);

            alert(
            "Registration Submitted Successfully"
            );
        })

        .catch(error => {

            console.log(error);

            alert(
            "Registration Failed"
            );
        });

    }, 2000);

});