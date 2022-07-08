const screen = document.querySelector(".screen");
const pressbtn1 = document.querySelector("#1");
const pressbtn2 = document.querySelector("#2");
const pressbtn3 = document.querySelector("#3");
const pressbtn4 = document.querySelector("#4");
const pressbtn5 = document.querySelector("#5");
const pressbtn6 = document.querySelector("#6");
const pressbtn7 = document.querySelector("#7");
const pressbtn8 = document.querySelector("#8");
const pressbtn9 = document.querySelector("#9");
const pressbtnx = document.querySelector("#*");
const pressbtn0 = document.querySelector("#0");
const pressbtny = document.querySelector("##");

pressbtn1.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value + 1;
});
pressbtn2.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn3.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn4.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn5.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn6.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn7.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn8.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn9.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtnx.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});

pressbtn0.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});
pressbtny.addEventListener("click", (e) => {
  let value = parseInt(screen.innerHTML);
  screen.innerHTML = value;
});
button.addEventListener("keypress", (event) => {
  if (event.key === "Enter") call();
});
function call() {
  if (screen.value === screen.value) alert("지금 거신 번호가 맞습니다");
  else "전화 잘못 거셨습니다";
}
