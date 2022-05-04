// jshint esversion: 6

function requestApiData() {
    //saveData object is sent via post to the server
    const saveData = {
        title: "send to server",
        content: "have a nice day"
    };

    const postData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveData)
    };

    fetch("/api/response", postData)
        .then(response => {
            // console.log("incoming data from server -->", response);
            return response.json();
        })
        .then(data => {
            form(data); // pass list in an array of strings
        })
        .catch(error => {
            console.error("Error:", error);
        }); // end of Save function
}


function form(data) {
    let frame = document.getElementsByClassName("flex-container-api");
    console.log(frame[0]);
    frame[0].innerHTML = `
    <form class="flex-container-menu" action="/menu/:item" method="post">
    <label for="recipe">Choose a Recipe:</label>
    <select id="recipe" name="item">
     </select>
     <input class="buttonMenu" type="submit">
     </form>
    `;

    if (data.label.length === 0) {
        frame[0].innerHTML = "No Category Chooseen";
    } else {
        dropDownMenu(data);
    }
}

function dropDownMenu(data) {
    console.log("drop down menu ", data.label);

    for (let i = 0; i < data.label.length; i++) {
        const node = document.createElement("option");
        const textnode = document.createTextNode(data.label[i]);
        node.appendChild(textnode);
        document.getElementById("recipe").appendChild(node);
    }
}


function listGen(data) {
    document.getElementById("recipeList").innerText = data.label;
    for (let i = 0; i < data.ingredients.length; i++) {
        // Create an "li" node:
        const node = document.createElement("li");

        // Create a text node:
        const textnode = document.createTextNode(data.ingredients[i]);

        // Append the text node to the "li" node:
        node.appendChild(textnode);

        // Append the "li" node to the list:

        document.getElementById("recipeList").appendChild(node);
    }
}

requestApiData();