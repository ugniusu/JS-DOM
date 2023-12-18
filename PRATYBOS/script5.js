"use strict";

const form = document.createElement("form")
console.log(form)
const input = document.createElement("input")
const label = document.createElement("label")
const input1 = document.createElement("input")
const label2 = document.createElement("label")
const input2 = document.createElement("input")
const label3 = document.createElement("label")
const button = document.createElement("button")
button.setAttribute("type", "submit")

document.body.append(form)
form.append(input)
input.setAttribute("placeholder", "ID")
input.setAttribute("type", "text")
input.setAttribute("pattern", "[0-9]{1,9}")
input.setAttribute("required", "true")

form.append(input1)
input1.setAttribute("placeholder", "pavadinimas")
input1.setAttribute("required", "true")

form.append(input2)
input2.setAttribute("placeholder", "kiekis")
input2.setAttribute("type", "number")
input2.setAttribute("required", "true")

form.append(button)

button.textContent = "Submit"