let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
const item3=container1.children[2];
container2.appendChild(item3);

//  2- Remove item 4
// YOUR CODE !!
const item4=container2.children[0];
item4.remove();

   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
const add=document.createElement("div");
add.className="item";
add.textContent="10";
document.getElementById("container3").appendChild(add);

//  4- Set all items located in a blue container to red
// YOUR CODE !!​
let contanercolor=document.querySelectorAll(".containerBlue");
contanercolor.forEach(element=>{
     element.style.color = "red";
})
