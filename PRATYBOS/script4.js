"use strict";
// ///////////////////////////////////
// PRATYBOS NR.4

// 1.

const imgContainer = document.querySelector(".pratybos-2");
const masyvas = [
  "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1CtPdfh3ZYHZmiOvtyzFe8/0ef112b73d9a6ade5f97dd4d99ccb952/acm-basim-960x540.jpg",
  "https://www.denofgeek.com/wp-content/uploads/2023/10/AC-Mirage.jpg?fit=1650%2C943",
  "https://www.trueachievements.com/imgs/140296/ac-mirage-history-of-baghdad.jpg",
  "https://assetsio.reedpopcdn.com/mirage_I8wzLTO.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
  "https://gagadget.com/media/cache/03/97/0397227ce7bf28aa826884a463b3a007.jpg",
  "https://roundtablecoop.com/wp-content/uploads/2023/05/assassinscreedmiragetitle-2.jpg",
  "https://pics.computerbase.de/1/0/8/1/6/4-5c8abf465e1b2b4c/article-1280x720.ab7e7491.jpg",
  "https://sportshub.cbsistatic.com/i/2022/09/12/a890b79d-eec6-4909-8b96-c4669c79916b/assassins-creed-mirage.jpg",
];

const heartSk = masyvas.length;

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(randomIndex);
  return array[randomIndex];
};

for (let j = 0; j < masyvas.length; j++) {
  const divImg = document.createElement("div");
  divImg.setAttribute("class", "divImg");

  const imgEl = document.createElement("img");
  imgEl.style.height = "200px";
  imgEl.style.width = "400px";
  imgEl.style.objectFit = "cover";
  const randomImg = random(masyvas);
  imgEl.setAttribute("src", randomImg);
  imgEl.textContent = randomImg;
  divImg.style.position = "relative";
  divImg.append(imgEl);

  const like = document.createElement("ion-icon");
  const fillLike = document.createElement("ion-icon");
  like.setAttribute("name", "heart-outline");
  like.setAttribute("class", "heart");
  like.style.width = "25px";
  like.style.height = "25px";
  like.style.color = "red";
  like.style.position = "absolute";
  like.style.right = "100px";
  like.style.bottom = "50px";
  like.style.zIndex = "1";

  fillLike.setAttribute("name", "heart");
  fillLike.setAttribute("class", "fillHeart");
  fillLike.style.width = "25px";
  fillLike.style.height = "25px";
  fillLike.style.color = "red";
  fillLike.style.position = "absolute";
  fillLike.style.right = "100px";
  fillLike.style.bottom = "50px";
  fillLike.style.zIndex = "-1";


  divImg.append(like);
  divImg.append(fillLike);

  imgContainer.append(divImg);
}

const emptyHeart = document.querySelectorAll(".heart");
const heart = document.querySelectorAll(".fillHeart");

imgContainer.style.display = "grid";
imgContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";

const likedImg = [];

emptyHeart.forEach((el, index) => {
  el.addEventListener("click", () => {
    heart[index].style.zIndex = "5";
    likedImg.push(masyvas[index])
    newLocalStorage();
  });
});

heart.forEach((el, index) => {
  el.addEventListener("click", () => {
    heart[index].style.zIndex = "-6"
    const likedIndex = likedImg.indexOf(masyvas[index])
    if (likedIndex !== -1) {
      likedImg.splice(likedIndex, 1)
      newLocalStorage()
    }
  })
})

const newLocalStorage = () => {
  localStorage.setItem("liked", JSON.stringify(likedImg))
}

const likedImgs = localStorage.getItem("liked")
if (likedImgs) {
  likedImg.push(...JSON.parse(likedImgs))

  likedImg.forEach((el) => {
    const index = masyvas.indexOf(el)
    if (index !== -1) {
      heart[index].style.zIndex = "5"
    }
  })
}
