// jshint esversion: 6

let generateDIV = function(parent) {
  let father = document.getElementById(parent); // parent element
  let div = document.createElement("li"); // create element
  father.appendChild(div);
  return div; // [father, div]
};

// menu Icon
