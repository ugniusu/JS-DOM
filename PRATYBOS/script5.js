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

////////////////////////////////////////////////////////
// localStorage.clear()
// const shop = document.getElementById("shop");
// const form = document.getElementById("form");
// const fromInput = document.getElementById("formInput");
// const shopInput = document.querySelectorAll("#formInput>input");
// const formButton = document.getElementById("formButton");
// const shopButton = document.querySelectorAll("#formButton>button");
// const submitButton = document.getElementById("submitButton");
// const removeButton = document.getElementById("removeButton");
// const editButton = document.getElementById("editButton");
// // localStorage.setItem("listExist",true)
// form.style.width = "50vw";
// fromInput.style.boxSizing = "border-box";
// shopInput.forEach((el) => {
//   el.style.display = "flex";
//   el.style.flexDirection = "column";
//   el.style.width = "100%";
//   el.style.boxSizing = "inherit";
// });
// formButton.style.display = "flex";
// formButton.style.justifyContent = "space-around";
// function getID(id) {
//   const dataFromLS = JSON.parse(localStorage.getItem("cartList"));
//   console.log(dataFromLS);
//   let sameID = false;
//   if (dataFromLS != null) {
//     dataFromLS.forEach((el) => {
//       if (el.id == id) sameID = true;
//     });
//   }
//   return sameID;
// }

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   let pId = document.getElementById("idField").value;
//   let pName = document.getElementById("nameField").value;
//   let pCount = document.getElementById("quantField").value;
//   if (pId == "" || pName == "" || pCount == "") {
//     alert("netaip ivesti duomenys");
//   } else if (getID(pId)) {
//     alert("produktas jau egzistuoja");
//   } else {
//     const product = {
//       id: pId,
//       name: pName,
//       quantity: pCount,
//     };
//     shopInput.forEach((el) => {
//       el.value = "";
//     });
//     const dataFromLS = JSON.parse(localStorage.getItem("cartList"));
//     const data = dataFromLS === null ? [] : dataFromLS;
//     data.push(product);
//     localStorage.setItem("cartList", JSON.stringify(data));
//     console.log(JSON.parse(localStorage.getItem("cartList")));
//   }
// });

// removeButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   let pId = document.getElementById("idField").value;
//   const dataFromLS = JSON.parse(localStorage.getItem("cartList"));
//   if (dataFromLS != null) {
//     dataFromLS.forEach((el, index) => {
//       if (el.id == pId) {
//         dataFromLS.splice(index, 1);
//         localStorage.setItem("cartList", JSON.stringify(dataFromLS));
//         shopInput.forEach((el) => {
//           el.value = "";
//         });
//       }
//     });
//   } else alert("Nera ka pasalinti");
// });
// editButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   let pId = document.getElementById("idField").value;
//   const dataFromLS = JSON.parse(localStorage.getItem("cartList"));
//   if (editButton.innerText == "Edit Item") {
//     if (dataFromLS != null) {
//       dataFromLS.forEach((el, index) => {
//         if (el.id == pId) {
//           let pName = document.getElementById("nameField");
//           let pCount = document.getElementById("quantField");
//           pName.value = el.name;
//           pCount.value = el.quantity;
//           dataFromLS.splice(index, 1);
//           localStorage.setItem("cartList", JSON.stringify(dataFromLS));
//           editButton.innerText = "Save & Update";
//         }
//       });
//     }
//   } else {
//     let pId = document.getElementById("idField").value;
//     let pName = document.getElementById("nameField").value;
//     let pCount = document.getElementById("quantField").value;
//     if (pId == "" || pName == "" || pCount == "") {
//       alert("netaip ivesti duomenys");
//     } else if (getID(pId)) {
//       alert("produktas jau egzistuoja");
//     } else {
//       const product = {
//         id: pId,
//         name: pName,
//         quantity: pCount,
//       };
//       shopInput.forEach((el) => {
//         el.value = "";
//       });
//       const data = dataFromLS === null ? [] : dataFromLS;
//       data.push(product);
//       localStorage.setItem("cartList", JSON.stringify(data));
//       editButton.innerText = "Edit Item";
//     }
//   }
// });
// shopButton.forEach((el) => {
//   el.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (JSON.parse(localStorage.getItem("cartList")) != null) {
//       localStorage.setItem("listExist", true);
//     } else localStorage.setItem("listExist", false);
//   });
// });
// if (JSON.stringify(localStorage.getItem("listExist"))) {
//   console.log("test");
//   const dataFromLS = JSON.parse(localStorage.getItem("cartList"));
//   let listItems = 0;
//   const tableCheck = document.querySelector("table");
//   if (tableCheck) {
//     tableCheck.remove();
//   }
//   const table = document.createElement("table");
//   const tableBody = document.createElement("tbody");
//   const nameRow = document.createElement("tr");
//   const pin = document.createElement("td");
//   pin.innerText = "ID";
//   const pnn = document.createElement("td");
//   pnn.innerText = "Name";
//   const pqn = document.createElement("td");
//   pqn.innerText = "Quantity";
//   nameRow.append(pin, pnn, pqn);
//   tableBody.appendChild(nameRow);
//   table.appendChild(tableBody);
//   shopButton.forEach((el) => {
//     el.addEventListener("click", (event) => {
//       event.preventDefault();
//       dataFromLS.forEach((el) => {
//         listItems++;
//       });
//       for (let i = 0; i < listItems; i++) {
//         const row = document.createElement("tr");
//         const pIdCell = document.createElement("td");
//         pIdCell.innerText = dataFromLS[i].id;
//         const pNameCell = document.createElement("td");
//         pNameCell.innerText = dataFromLS[i].name;
//         const pCountCell = document.createElement("td");
//         pCountCell.innerText = dataFromLS[i].quantity;
//         row.append(pIdCell, pNameCell, pCountCell);
//         tableBody.appendChild(row);
//         table.appendChild(tableBody);
//       }
//       document.body.appendChild(table);
//       table.setAttribute("border", "1");
//     });
//   });
// }
