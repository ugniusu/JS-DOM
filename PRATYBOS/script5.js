"use strict";

const form = document.createElement("form")
console.log(form)
const id = document.createElement("input")
const name = document.createElement("input")
const quantity = document.createElement("input")
const button = document.createElement("button")
button.setAttribute("type", "submit")

document.body.append(form)
form.append(id)
id.setAttribute("placeholder", "ID")
id.setAttribute("type", "text")
id.setAttribute("pattern", "[0-9]{1,9}")
id.setAttribute("required", "true")

form.append(name)
name.setAttribute("placeholder", "pavadinimas")
name.setAttribute("required", "true")

form.append(quantity)
quantity.setAttribute("placeholder", "kiekis")
quantity.setAttribute("type", "number")
quantity.setAttribute("required", "true")

form.append(button)

button.textContent = "Submit"

const dataFromLs = JSON.parse(localStorage.getItem("uzsakymai"))
const data = dataFromLs === null ? [] : dataFromLs


button.addEventListener("click", (event) => {
    event.preventDefault();
    const idValue = id.value;
    const nameValue = name.value
    const amountValue = quantity.value
    const allValue = {
        id: idValue,
        name: nameValue,
        quantity: amountValue
    }
    console.log(allValue);
    data.push(allValue);
    console.log(data)
    localStorage.setItem("uzsakymas", JSON.stringify(data))
  });
  