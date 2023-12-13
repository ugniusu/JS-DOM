"use strict";

//////////////////////////////////////////////////
// DOM
const divas = document.querySelector("div");
console.log(divas);

const divas1 = document.querySelector("#divas");
const divas2 = document.querySelector(".divas1");
console.log(divas2, divas1);

const byID = document.getElementById(divas);
console.log(divas);

const byClass = document.getElementsByClassName("divas1");
console.log(byClass);

const array = document.querySelectorAll("div");
console.log(array);

const byTag = document.getElementsByTagName("div");
console.log(byTag);

const child = divas.querySelector("p");
console.log(child);

const child1 = document.querySelector("div").childNodes;
console.log(child1);

const child2 = document.querySelectorAll("div>p");
console.log(child2);

const firstChild = document.querySelector("div > p");
// console.log(firstChild, child2[1]);

// Uzdeti klase elementams
firstChild.setAttribute("class", "pirmasP");
child2[1].setAttribute("class", "raganosis");
console.log(firstChild, child2[1]);

// Nuimti klase
// firstChild.removeAttribute('id')
// console.log(firstChild)

// Surassti klases pavadinima
const atr = firstChild.getAttribute("class");
console.log(atr);

// Klasiu modifikavimas
child2[1].classList.add("myClassInCss");
child2[1].classList.remove("myClassInCss");
child2[1].classList.replace("raganosis", "myClassInCss");

child2[1].style.color = "red";
child2[1].style.backgroundColor = "#f4f4f4";

// Prideti nauja elementa HTML
const btn = document.createElement("button");
const img = document.createElement("img");

// Nurodyti kurioj vietoj bus
// Tik vienas gali buti append
divas2.appendChild(btn);

// Gali daugiau append but
divas2.append(img);

// Parodo uz elemento kurioj vietos bus
// pries konteineri
// divas2.insertAdjacentElement('beforebegin', btn)

// // iskarto pacioj pirmoj eilutej konteinerio viduje
// divas2.insertAdjacentElement('afterbegin', btn)

// divas2.insertAdjacentElement('beforeend', btn)
divas2.insertAdjacentElement("afterend", btn);

//// dar vienas Elemento pridejimo budas, bet labai blogas(nenaudoti)
// divas2.innerHTML += '<span> SPAN </span>'

// Prideti teksta
child2[0].innerText = "My name is sheeesh";
child2[1].textContent = "Warrap ma nigga whats gud";

btn.innerText = "Paspausti";

// REMOVE
// const span = document.querySelector('span')
// span.remove()

btn.addEventListener(
  "click",
  () => {
    if (btn.style.backgroundColor === "black") {
      btn.style.backgroundColor = "orangered";
    } else {
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
    }
  },
  { once: true }
);

btn.removeEventListener("click", () => {
  console.log("removed");
});

// Kai reikia pasizymeti daugiau nei viena elementa
const btn1 = document.createElement("button");
btn1.innerText = "Paspausti 1";
const btn2 = document.createElement("button");
btn2.innerText = "Paspausti 2";
const btn3 = document.createElement("button");
btn3.innerText = "Paspausti 3";

divas2.append(btn1, btn2, btn3);

const buttonsGroup = document.querySelectorAll("button");
buttonsGroup.forEach((el, index) =>
  el.addEventListener("click", () => {
    console.log(`you clicked button ${el.innerText}`);
  })
);

// EVENTS
// event.value
// event.target

const form = document.querySelector("form");
const input = document.querySelector("input");
const submit = document.querySelector("form > button");
console.log(form, input, submit);

let zmones = [];
let count = 0;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  count++;
  const inputValue = input.value;
  console.log(inputValue);

  const persons = {
    id: count,
    name: inputValue,
  };
  zmones.push(persons);
  localStorage.setItem("zmones", JSON.stringify(zmones));
  // input.value= ""
  form.reset();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});
// Editinam nx
const editInput = document.querySelector("#edit");
const edit = document.querySelector("#editbutton");

edit.addEventListener("click", (e) => {
  e.preventDefault();

  const editTable = Number(editInput.value);
  console.log(editTable);

  const fromLs = JSON.parse(localStorage.getItem("zmones"));
  console.log(fromLs);

  const find = fromLs.findIndex((el) => el.id === editTable);
  console.log(find);

  input.value = fromLs[find].name;
});
