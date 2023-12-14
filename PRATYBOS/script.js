"use strict";

/*
//  PRATYBOS NR.1
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
// let count = 0;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  // count++;
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
const click2 = document.querySelector(".click2")
const counting = document.querySelector(".count");
let countClicks = 0;
click.addEventListener("click", (event) => {
  event.preventDefault();
  countClicks++;
  console.log(countClicks);

  counting.textContent = countClicks;
});

click2.addEventListener("click", (event) => {
  event.preventDefault();
  countClicks--;
  console.log(countClicks);

  counting.textContent = countClicks;
});
*/


/*
// PRATYBOS NR.2
// 1.
const container = document.querySelector(".pratybos-2");

const span = document.createElement("span");

const h1 = document.createElement("h1");
h1.setAttribute("id", "h1-id");

const p = document.createElement("p");

const h2 = document.createElement("h2");
h2.setAttribute("class", "h2-class");
container.append(h2);
const h2Class = document.querySelector(".h2-class");
console.log(h2Class);

const strong = document.createElement("strong");
strong.setAttribute("id", "strong-class");
container.append(strong);
const strongId = document.querySelector("#strong-class");

// 2.
span.textContent = "Is kurio tu medzio iskrites ?";
h1.textContent = "Ka tu ziuri pajacas";
p.textContent = "Kas skaitys , tas gaidys";
h2.textContent = "Stebisi tas, kas nestebi";
strong.textContent = "Kai ... ka sakei?";

const pratybos2 = document.querySelector(".pratybos-2");

pratybos2.append(span, h1, p, h2, strong);

// 3.
span.style.backgroundColor = "aqua";

h1.style.textTransform = "uppercase";
h1.style.display = "flex";
h1.style.justifyContent = "center";

p.style.letterSpacing = "5px";

h2Class.style.border = "2px solid";

strongId.style.display = "flex";
strongId.style.justifyContent = "end";

// 4.

for (let i = 0; i < 6; i++) {
  const div = document.createElement("div");
  div.textContent = "Hi all";
  container.append(div);
  div.style.height = "100px";
  div.style.width = "100px";
  console.log(div);
}

// 5.
const randomBtn = document.createElement("button");
randomBtn.textContent = "Random color";
container.append(randomBtn);

const colors = [];
for (let i = 0; i < 10; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}

randomBtn.addEventListener("click", () => {
  const allDiv = pratybos2.querySelectorAll("div");

  allDiv.forEach((div) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    div.style.backgroundColor = randomColor;
  });
});

// 6.
const wordsContainer = document.querySelector(".pratybos-2")
const masyvas = ["obuolys", "kriause", "apelsinas", "bananas", "kokosas", "virsila"]

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  console.log(randomIndex)
  return array[randomIndex]
}

for (let i = 1; i < masyvas.length; i++) {
  const pEl = document.createElement("p")
  const randonWord = random(masyvas)
  pEl.textContent = randonWord
  wordsContainer.append(pEl)
}
*/


/////////////////////////////////////////
// PRATYBOS NR. 3

// const button = document.createElement("button");
// button.innerText = "CREATE TABLE: ";
// const inputRows = document.createElement("input");
// inputRows.placeholder = "eilutes";
// const inputColumns = document.createElement("input");
// inputColumns.placeholder = "stulpeliai";
// const container = document.createElement("div");
// container.append(button, inputRows, inputColumns);
// document.body.append(container);
// const divas = document.getElementById("tablel");
 
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   const tablecheck = document.querySelector("table");
//   if (tablecheck) {
//     tablecheck.remove();
//   }
//   const table = document.createElement("table");
//   const tableBody = document.createElement("tbody");
//   const eilSk = inputRows.value; // eilSk talpina ivesta value i langelius
//   const stulpSk = inputColumns.value; // stulpSk talpina ivesta value i langelius
 
//   for (let i = 0; i < eilSk; i++) {
//     const row = document.createElement("tr");
 
//     for (let j = 0; j < stulpSk; j++) {
//       const cell = document.createElement("td");
//       const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//     tableBody.appendChild(row);
//   }
//   table.appendChild(tableBody);
//   document.body.appendChild(table);
//   table.setAttribute("border", "2"); // del vizualo
// });

// ///////////////////////////////////
// PRATYBOS NR.4

const wordsContainer = document.querySelector(".pratybos-2")
const masyvas = ["obuolys", "kriause", "apelsinas", "bananas", "kokosas", "virsila"]

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  console.log(randomIndex)
  return array[randomIndex]
}

for (let i = 1; i < masyvas.length; i++) {
  const pEl = document.createElement("p")
  const randonWord = random(masyvas)
  pEl.textContent = randonWord
  wordsContainer.append(pEl)
}

const randomBtn = document.createElement("button");
randomBtn.textContent = "Random color";
container.append(randomBtn);

const colors = [];
for (let i = 0; i < 10; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}

randomBtn.addEventListener("click", () => {
  const allDiv = pratybos2.querySelectorAll("div");

  allDiv.forEach((div) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    div.style.backgroundColor = randomColor;
  });
});
