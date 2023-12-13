"use strict";

// 1.
document.querySelector("p").innerText = "Labas rytas visiems, kas normalus";

// 2.
const divas = document.querySelector(".peoples-names");
divas.append(document.querySelector(".name"));
console.log(divas);

// 3.
const container = document.querySelector(".peoples-names");
container.setAttribute("class", "myClass");
container.setAttribute("id", "myId");

const anchor = document.createElement("a");
const image = document.createElement("img");

anchor.setAttribute(
  "href",
  "https://en.wikipedia.org/wiki/Beetlejuice_%28entertainer%29"
);

image.setAttribute(
  "src",
  "https://pbs.twimg.com/profile_images/1271082306/P1000854_400x400.JPG"
);

anchor.textContent = "Uzeikite";

image.textContent =
  "https://pbs.twimg.com/profile_images/1271082306/P1000854_400x400.JPG";

container.append(anchor);
container.append(image);
console.log(container);

// 4.
const childs = document.querySelectorAll("div > p");
console.log(childs);
childs.forEach((el, index) => {
  if (index % 2 === 0) {
    el.style.color = "red";
    el.style.backgroundColor = "#000";
  } else {
    el.style.color = "#fff";
    el.style.backgroundColor = "green";
  }
});

// 5.
const submit = document.querySelector(".btn");
const input = document.querySelector("input");
let count = 0;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  count++;
  const inputValue = input.value;
  console.log(inputValue);

  container.append(inputValue);
});

// 6.
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.textContent = "Sukurti";
btn2.textContent = "Pasalinti";

btn1.addEventListener("click", (eventas) => {
  eventas.preventDefault();
  const img1 = document.createElement("img");
  img1.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Beetlejuice_onstage.jpg/640px-Beetlejuice_onstage.jpg"
  );
  const container1 = document.querySelector(".container-1");
  container1.append(img1);
});

btn2.addEventListener("click", () => {
  const remove = document.querySelector("img");
  remove.remove();
});

// 7.
const click = document.querySelector(".click");
const counting = document.querySelector(".count");
let countClicks = 0;
click.addEventListener("click", (event) => {
  event.preventDefault();
  countClicks++;
  console.log(countClicks);

  counting.textContent = countClicks;
});
