// jshint esversion: 6

function slideMenu(data) {
    let divParent = document.createElement("div");
    divParent.setAttribute("class", "flex-container");
    ///////////// child left /////////
    let divChildLeft = document.createElement("div");
    divChildLeft.setAttribute("class", "flex-item-left");

    divChildLeft.innerHTML = `<img src="${data.image}"/>`;
    divParent.appendChild(divChildLeft);

    ///////////// child Right /////////
    let divChildRight = document.createElement("div");
    divChildRight.setAttribute("class", "flex-item-right");
    divChildRight.style.color = "white";

    ///////////// sub - child left ingredients list /////////
    const text = document.createTextNode(data.ingredients);
    divChildRight.appendChild(text);

    divParent.append(divChildRight);

    divChildRight.innerHTML = `<ul id="recipeList">  </u>`;

    const section = document.getElementById("item");
    section.append(divParent);
}