// console.log("javascript working");
// const logIn = document.getElementById('logIn');
// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');
// const errorElement = document.getElementById('error');


// console.log('test', document.getElementById('logIn'));


// document.getElementById('submitButton').addEventListener('click', handleForm);

// function handleForm() {

//     console.log("name");
//     console.log(logIn.name.value);

// };

// https://www.geeksforgeeks.org/how-to-get-post-data-in-node-js/
document.querySelector('button')
    .addEventListener('click', (e) => {
        e.preventDefault();
        const username = document
            .querySelector('#user').value;

        const password = document
            .querySelector('#pass').value;

        fetch('/', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => console.log("test", data));
    });