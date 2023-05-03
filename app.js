console.dir(document.domain);
console.log(document.URL);
var HeaderTitle = document.getElementById('header-title');
/*HeaderTitle.textContent = 'Hello';
HeaderTitle.innerText = 'GoodBye';
HeaderTitle.style.borderBottom = 'solid 3px black';*/

// Select the title element and add a black border
let title = document.getElementById("header-title");
title.style.border = "1px solid black";

// Select the ADD ITEM button and change the font color to green and make it bold
let addItemButton = document.querySelector("#main form .btn");
addItemButton.style.color = "green";
addItemButton.style.fontWeight = "bold";

// Get the third list item and set its background color to green
const thirdItem = document.querySelector('#items li:nth-child(3)');
thirdItem.style.backgroundColor = 'green';

// Get all the list items and set their font weight to bold
const allItems = document.querySelectorAll('#items li');
allItems.forEach(item => {
  item.style.fontWeight = 'bold';
});
