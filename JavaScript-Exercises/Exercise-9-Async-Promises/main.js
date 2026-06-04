fetch(
"https://jsonplaceholder.typicode.com/posts"
)
.then(response => response.json())
.then(data => {

    console.log(
        "Data Loaded Successfully"
    );

    console.log(data);
})
.catch(error => {

    console.log(error);
});

async function loadEvents() {

    try {

        const response =
            await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data =
            await response.json();

        console.log(
            "Async/Await Data:"
        );

        console.log(data);

    }
    catch(error){

        console.log(error);
    }
}

loadEvents();