// jshint esversion: 6
// <%- include('./javaScript/scriptAPI.ejs')%>

const templete = `
<div class="flex-container">
    <div class="flex-item-left">
        <img src="/images/MrTaco.jpg" />
    </div>
    <div class="flex-item-right">
        <h1 class="textOne ">
          Food Recipy
        </h1>
    </div>
</div>
`;

const section = document.getElementById("item");
section.innerHTML = templete;
console.log(section);