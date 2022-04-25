<<<<<<< Updated upstream
=======
// jshint esversion: 6
// <%- include('./javaScript/scriptAPI.ejs')%>
let searchButton = document.getElementById("search");
console.log(searchButton);
searchButton.addEventListener("click", () => {
    console.log("button pressed");
    requestApiData();
});

function requestApiData() {
    //saveData object is sent via post to the server 
    const saveData = {
        title: "send to server",
        content: "have a nice day"
    };

    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(saveData),
    };

    fetch('/api/response', postData)
        .then((response) => {
            console.log(response, response.status, response.load);
            return response.json();
        })
        .then((data => {
            console.log("data sent to client", data.results[0].recipe);
            let labe = data.results[0].recipe.label;
            let ingredient = data.results[0].recipe.ingredients;
            console.log("type of ----->", typeof ingredient, Array.isArray(ingredient));
            let collect = [];
            let a = {
                name: data.results[0].recipe.label,
                recipe: data.results[0].recipe.ingredients,
                ingre: collect,
                picture: data.results[0].recipe.image,
            };

            for (let i = 0; i < a.recipe.length; i++) {
                console.log(a.recipe[i].text);
                collect.push(a.recipe[i].text);
            }
            useApiData(a);
        }))
        .catch((error) => {
            console.error('Error:', error);
        }); // end of Save function
}

function useApiData(data) {
    const templeteA = `
    scriptAPI.ejs
    <div class="flex-container">
        <div class="flex-item-left">
      <img src="${data.picture}"/>
        </div>
        <div class="flex-item-right">
            <p id="recipy" class="textOne ">
            ${data.name}              
            </p>
            <P style = "color: red">
            ${data.ingre}
            </p>
        </div>
    </div>
    `;

    const section = document.getElementById("item");
    section.innerHTML = templeteA;
    console.log("test", data);

}
>>>>>>> Stashed changes
