"use strict";

const form = document.createElement("form");
console.log(form);
const id = document.createElement("input");
const name = document.createElement("input");
const quantity = document.createElement("input");
const button = document.createElement("button");
button.setAttribute("type", "submit");

document.body.append(form);
form.append(id);
id.setAttribute("placeholder", "ID");
id.setAttribute("type", "text");
id.setAttribute("pattern", "[0-9]{1,9}");
id.setAttribute("required", "true");
id.setAttribute("class", "id");

form.append(name);
name.setAttribute("placeholder", "pavadinimas");
name.setAttribute("required", "true");
name.setAttribute("class", "name");

form.append(quantity);
quantity.setAttribute("placeholder", "kiekis");
quantity.setAttribute("type", "number");
quantity.setAttribute("required", "true");
quantity.setAttribute("class", "quantity");

form.append(button);

button.textContent = "Submit";

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

document.body.appendChild(table);

const findId = (id) => {
  const dataFromLs = JSON.parse(localStorage.getItem("uzsakymai"));
  console.log(dataFromLs);
  let sameId = false;
  if (dataFromLs != null) {
    dataFromLs.forEach((el) => {
      if (el.id == id) sameId = true;
    });
  }
  return sameId;
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  const idValue = id.value;
  const nameValue = name.value;
  const quantityValue = quantity.value;
  const allValue = {
    id: idValue,
    name: nameValue,
    quantity: quantityValue,
  };

  const row = document.createElement("tr");
  const idCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const quantityCell = document.createElement("td");

  idCell.textContent = idValue;
  nameCell.textContent = nameValue;
  quantityCell.textContent = quantityValue;

  tableBody.appendChild(row);
  table.appendChild(tableBody);
  console.log(allValue);

  if (findId(idValue)) {
    alert("Toks produkto ID jau egzistuoja");
  } else {
    const dataFromLs = JSON.parse(localStorage.getItem("uzsakymai"));
    const data = dataFromLs === null ? [] : dataFromLs;
    data.push(allValue);
    localStorage.setItem("uzsakymai", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("uzsakymai")));

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
  }
});

const editBtn = document.createElement("button");
editBtn.setAttribute("type", "submit");
editBtn.textContent = "Edit";
form.append(editBtn);
const btns = document.querySelectorAll("button");

// editBtn.addEventListener("click", (ev) => {
//   ev.preventDefault();
//   let idValue = document.querySelector(".id").value;
//   const dataFromLs = JSON.parse(localStorage.getItem("uzsakymai"));
// });

editBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let id = document.querySelector(".id").value;
  const dataFromLS = JSON.parse(localStorage.getItem("uzsakymai"));
  dataFromLS.forEach((el, index) => {
    if (el.id == id) {
      let name = document.querySelector(".name");
      let quant = document.querySelector(".quantity");
      name.value = el.name;
      quant.value = el.quantity;
      dataFromLS.splice(index, 1);
      localStorage.setItem("uzsakymai", JSON.stringify(dataFromLS));
      editBtn.innerText = "Change";
    } else {
      const idValue = id.value;
      const nameValue = name.value;
      const quantityValue = quantity.value;
      const allValue = {
        id: idValue,
        name: nameValue,
        quantity: quantityValue,
      };

      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const quantityCell = document.createElement("td");

      idCell.textContent = idValue;
      nameCell.textContent = nameValue;
      quantityCell.textContent = quantityValue;

      tableBody.appendChild(row);
      table.appendChild(tableBody);
      console.log(allValue);

      if (findId(idValue)) {
        alert("Toks produkto ID jau egzistuoja");
      } else {
        const dataFromLs = JSON.parse(localStorage.getItem("uzsakymai"));
        const data = dataFromLs === null ? [] : dataFromLs;
        data.push(allValue);
        localStorage.setItem("uzsakymai", JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem("uzsakymai")));

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        editBtn.textContent("Edit");
      }
    }
  });
});
