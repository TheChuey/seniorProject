// jshint esversion: 6
document.getElementById("save").addEventListener("click", save);

// function save() {
//     let postElement = document.querySelector(".save");
//     let grabTitle = document.getElementById("grabTitle");

//     const savedContent = grabTitle.textContent
//     const saveData = {
//         content: savedContent
//     };
//     console.log("class element ", postElement, grabTitle.textContent, saveData);
//     fetch('/save', {
//             method: 'POST', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(saveData),
//         })
//         .then(saveData => {
//             console.log('save return -->', saveData);
//             if (saveData.status === 200) {
//                 console.log("sucess");
//                 if (confirm("Post saved! Press Ok to Post or Repost") == true) {
//                     // postElement.remove();
//                     document.getElementById("2").innerHTML = "You pressed OK!";
//                 } else {
//                     document.getElementById("2").innerHTML = "You canceled!";
//                 }
//             } else if (saveData.status === 404) {
//                 alert("not saved");
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         }); // end of del function
// }

function del(postTitle) {

    let postElement = document.querySelector(".del");
    const data = {
        content: postTitle
    };

    fetch('/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log('del recieved results json -->:', response);
            return response.json();
        })
        .then(check => {
            console.log("ok it works", check);
            if ((check.status === "sucess") && (confirm("Post Deleted") && check.answear)) postElement.remove();
        });
}