console.dir(document.domain);
console.log(document.URL);
var HeaderTitle = document.getElementById('header-title');
/*HeaderTitle.textContent = 'Hello';
HeaderTitle.innerText = 'GoodBye';*/
HeaderTitle.style.borderBottom = 'solid 3px black';
let title = document.getElementById("header-title");
title.style.border = "1px solid black";

let addItemButton = document.querySelector("#main form .btn");
addItemButton.style.color = "green";
addItemButton.style.fontWeight = "bold";
