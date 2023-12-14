"use strict";
// ///////////////////////////////////
// PRATYBOS NR.4

// 1.

const imgContainer = document.querySelector(".pratybos-2");
const masyvas = [
  "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg",
  "https://s7g10.scene7.com/is/image/tetrapak/nature-landscape?wid=600&hei=338&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
  "https://s7g10.scene7.com/is/image/tetrapak/polymers-forest?wid=384&hei=216&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
  "https://www.cnnphilippines.com/dam/jcr:713c0812-9e82-49a9-b2d9-1208b06dd352/PHOTO1.png",
  "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
];

const heartSk = masyvas.length;

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(randomIndex);
  return array[randomIndex];
};

for (let j = 1; j < masyvas.length; j++) {
  const imgEl = document.createElement("img");
  imgEl.style.height = "200px";
  imgEl.style.width = "300px";
  const randomImg = random(masyvas);
  imgEl.setAttribute("src", randomImg);
  imgEl.textContent = randomImg;
  imgEl.style.position = "relative";
  imgContainer.append(imgEl);

  for (let i = 0; i < heartSk; i++) {
    const like = document.createElement("ion-icon");
    like.setAttribute("name", "heart-outline");
    like.setAttribute("class", "heart");
    like.style.width = "25px";
    like.style.height = "25px";
    imgContainer.append(like);
    like.style.color = "red";
  
    like.style.position = "absolute"
    like.style.z-index = "1"
  }
}

// 2.



