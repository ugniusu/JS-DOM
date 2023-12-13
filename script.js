"use strict";

// LOCAL STORAGE

// let cat = "Tom";

// localStorage.setItem("catinas", cat);
// let fromLs = localStorage.getItem("katukas")
// console.log(fromLs)

// let dog = 'Raganosis'
// localStorage.setItem('dogas', dog)

// const cats = {
//     cat1: "Brisius",
//     cat2: "Jerry",
//     cat3: "Begemotas"
// }

// const dogs = ["Pukis", "Saltis", "Karstis"]

// localStorage.setItem("catsArray", JSON.stringify(cats))
// localStorage.setItem("dogsArray", JSON.stringify(dogs))

// let catsFromLs = JSON.parse(localStorage.getItem("catsArray"))
// console.log(catsFromLs)
// console.log(catsFromLs.cat2)

// const dogs2 = [{
//     cat1: "Brisius",
//     cat2: "Jerry",
//     cat3: "Begemotas"
// },
// {
//     cat1: "Brisius",
//     cat2: "Jerry",
//     cat3: "Begemotas"
// },
// {
//     cat1: "Brisius",
//     cat2: "Jerry",
//     cat3: "Begemotas"
// }]

// localStorage.setItem('dogsArrayWithObjects', JSON.stringify(dogs2))

// const dogs2FromLs = JSON.parse(localStorage.getItem("dogsArrayWithObjects"))
// console.log(dogs2FromLs)
// console.log(dogs2FromLs[1].cat2)

// localStorage.removeItem("dogas") // Istrina tik nurodyta property is local storage
// // localStorage.clear() // Viska istrina is local storage

// SESSION STORAGE
/*
let vardas = "Ugnius";
sessionStorage.setItem("Vardas", vardas);

let fromSs = sessionStorage.getItem("vardas");
console.log(fromSs);

let dog = "Raganosis";
sessionStorage.setItem("Gyvunas", dog);

const animals = [
  {
    dog1: "Kalpokas",
    dog1: "Mazhas",
  },
  {
    snake1: "Python",
    snake2: "zaltys",
  },
];
sessionStorage.setItem("animalsArrayObjects", JSON.stringify(animals));

const animnalsFromSs = JSON.parse(
  sessionStorage.getItem("animalsArrayObjects")
);
console.log(animnalsFromSs);

sessionStorage.removeItem("Gyvunas");

///////////////////////////////////////////////////////
// Tikrinu ar yra local storage
*/

// localStorage.clear();

/*
// Patikrinam ar yra
const dataFromLs = JSON.parse(localStorage.getItem("persons"));
// console.log(dataFromLs);

// Jei nera duomenu sukuriu masyva
const data = dataFromLs === null ? [] : dataFromLs;
// console.log(data);

const person = {
  name: "John",
  lastname: "Slepa",
};

data.push(person);
// console.log(data);

localStorage.setItem("person", JSON.stringify(data));

const dataFromLs1 = JSON.parse(localStorage.getItem("person"));
// console.log(dataFromLs1);

const data1 = dataFromLs1 === null ? [] : dataFromLs1;
// console.log(data1);

data1.push(person);
localStorage.setItem("person", JSON.stringify(data1));

const dataFromLs2 = JSON.parse(localStorage.getItem("person"));
console.log(dataFromLs2);

const person1 = {
  name: "Raganosis",
  lastName: "Tau"
};
const newArray = dataFromLs2.find(
(elementas) => elementas.name === "John" && elementas.lastname === "Slepa"
);
console.log(newArray);


if (newArray) {
  alert("Toks jau yra");
} else {
  dataFromLs2.push(person1);
  localStorage.setItem("person", JSON.stringify(dataFromLs2));
  alert("Naujas irasas issaugotas");
}

*/

// const duomenys = localStorage.getItem("persons")
// const atsakymas = duomenys === null ? [] : JSON.parse(duomenys)

// const person = {
//     name: "John",
//     lastName: "Wick"
// }

// const ieskomas = atsakymas.find((el) => el.name === person.name && el.lastName === person.lastName)
// console.log(ieskomas)

// if(ieskomas) {
//     alert("Toks jau yra")
// } else {
//     atsakymas.push(person)
//     localStorage.setItem("persons", JSON.stringify(atsakymas))
//     alert("Naujas irasas patalpintas")
// }

// const duomenysIsLs = JSON.parse(localStorage.getItem("persons"))

// const person1 = {
//     name: "Bayek",
//     lastName: "Siwa"
// }

// const ieskomas1 = duomenysIsLs.find((el) => el.name === person1.name && el.lastName === person1.lastName)
// console.log(ieskomas1)

// if(ieskomas1) {
//     alert("Toks jau yra")
// } else {
//     duomenysIsLs.push(person1)
//     localStorage.setItem("persons", JSON.stringify(duomenysIsLs))
//     alert("Naujas irasas patalpintas")
// }

//////////////////////////////////////////////////////////////
// PRATYBOS
// 1.
// import result from "./data.js";
// console.log(result);

// // 2. //Patikrinam ar yra LS yra "favorites"
// const tikrinam = JSON.parse(localStorage.getItem("favorites"));
// console.log(tikrinam);

// // 3. // Jei nera sukurti tuscia masyva
// const ats = tikrinam === null ? [] : localStorage.parse(tikrinam);
// console.log(ats);

// // 4. // Sukurti funkcija, kuri randa konkretaus filmo info is data.js failo pagal filmo ID
// const ieskom = (id) => {
//   const filmas = result.find((el) => el.id === id);
//   console.log(filmas);
//   return filmas;
// };
// ieskom(414906);

// // 5. // Irasyti i local storage pasirinktu filmu ID ir title
// const manoFilmas = (id) => {
//   const patinka = {
//     id: ieskom(id).id,
//     title: ieskom(id).title,
//   };
//   console.log(patinka);

//   const moviesExist = ats.find((el) => el.id === patinka.id);

//   if (moviesExist) {
//     // alert("Yra toks filmas. wtf")
//   } else {
//     ats.push(patinka);
//     localStorage.setItem("filmas", JSON.stringify(ats));
//     // alert("Idejau tavo ta filma")
//   }
// };
// manoFilmas(414906);
// manoFilmas(284054);

// const print = () => {
//   const fromLs = JSON.parse(localStorage.getItem("filmas"));
//   console.log(fromLs);
//   fromLs.forEach((element) =>
//     console.log(`id: ${element.id}, title: ${element.title}`)
//   );
// };

// print();

// 8. Parsigrazini is local storage, pakeiti js faile filma, ir vel grazini i localsotrage
// const remove = (id) => {
//   const fromLs = JSON.parse(localStorage.getItem("filmas"));

//   const moviesIndex = fromLs.findIndex((movie) => movie.id === id);
//   console.log(moviesIndex);

//   if (moviesIndex > -1) {
//     alert(`Istrintas filmas ${fromLs[moviesIndex].title}`);
//     fromLs.splice(moviesIndex, 1);
//     localStorage.setItem("filmas", JSON.stringify(fromLs));
//   } else {
//     alert("Filmas nerastas");
//   }
//   localStorage.setItem("filmas", JSON.stringify(fromLs));
// };

// remove(414906);

/////////////////////////////////////////////////////
// Pratybos nr2
// 1.
/*
import data from "./data.json" assert { type: "json" };
console.log(data);
const tikrinti = localStorage.getItem("salys");
console.log(tikrinti);

////
const atsakymas = tikrinti === null ? [] : localStorage.parse(tikrinti);
console.log(atsakymas);
////
data.forEach((el, index) => {
  if (!el.hasOwnProperty("capital")) {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: "Data not found",
    };

    console.log(country);
    atsakymas.push(country);
  } else {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: el.capital[0],
    };
    console.log(country);
    atsakymas.push(country);
  }
});
console.log(atsakymas);
localStorage.setItem("salys", JSON.stringify(atsakymas));
*/

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
console.log(form, input, submit)

let zmones = []
let count = 0

submit.addEventListener('click', (event) => {
  event.preventDefault()
  count++
  const inputValue = input.value
  console.log(inputValue)
  
  const persons = {
    id: count,
    name: inputValue
  }
  zmones.push(persons)
  localStorage.setItem("zmones", JSON.stringify(zmones))
  // input.value= ""
  form.reset()
})

submit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target)
})
// Editinam nx
const editInput = document.querySelector("#edit")
const edit = document.querySelector("#editbutton")

edit.addEventListener("click", (e) => {
  e.preventDefault();

  const editTable = Number(editInput.value)
  console.log(editTable)

  const fromLs = JSON.parse(localStorage.getItem("zmones"))
  console.log(fromLs)

  const find = fromLs.findIndex((el) => el.id === editTable)
  console.log(find)

  input.value = fromLs[find].name
})