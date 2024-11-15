const container = document.querySelector("#container");

function createCard(data) {
    return `
        <div class="blocks">
            <h3>Name: ${data.name}</h3>
            <h3>Username: ${data.username}</h3>
            <h3>Email: ${data.email}</h3>
            <p>Addres: ${data.address}</p>
            <p>Street: ${data.street}</p>
            <p>Suite: ${data.suite}</p>
            <p>City: ${data.city}</p>
            <p>ZipCode: ${data.zipcode}</p>

            <h6>PhoneNumber: ${data.phone}</h6>
            <h6>Website: ${data.website}</h6>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    })


        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })

        .then(data => {
            container.innerHTML = '';
            data.forEach(element => {
                let card = createCard(element)
                container.innerHTML += card
            });
        })

        .catch(error => {
            console.log(error);
        })
})