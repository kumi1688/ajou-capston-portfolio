let buttons = document.querySelectorAll(".button");
const headers = document.querySelector("header");

buttons = Array.from(buttons);
buttons.forEach((button) => {
  buttons.addEventListener("click", (event) => {
    let selectedItem = "";
    const tagName = event.target.tagName;
    if (tagName === "I" || tagName === "P") {
      selectedItem = event.target.parentNode.id;
    } else {
      selectedItem = event.target.id;
    }
    selectedItem += " ";
    header.innerHTML += selectedItem;
  });
});
const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  let inputed number = "";
    const inputs = event.target.tagName;

  if(inputs === "#id"){inputed number =event. target. id;
  }  
    header.innerHTML += event
    if(inputs === "enter"){alert(header)}
    else 0
});

let icons = document.querySelectorAll(".icon");
const header = document.querySelector("header");

icons.addEventListener("click", (event) => {
  let selectedItem = "";
  const tagName = event.target.tagName;
  if (tagName === "I") alert(header);
  else 0;
});
