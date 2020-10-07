"use strict";

let myLke = false;
let btnLikes = document.querySelector(".likes__link");
let likesCount = document.querySelector(".likes__count");

btnLikes.onclick = function () {
  let currentLikes = +likesCount.textContent;
  if (myLke) {
    likesCount.textContent = --currentLikes;
  } else {
    likesCount.textContent = ++currentLikes;
  }
  myLke = !myLke;
  btnLikes.classList.toggle("likes__link_my");
};

let itemMessage = document.querySelector(".form-post__message-input");
let btnWriteMe = document.querySelector(".btn__post-js");

itemMessage.oninput = function () {
  if (itemMessage.value.length < 10 || itemMessage.value.length > 200) {
    itemMessage.style.color = "red";
    btnWriteMe.disabled = true;
  } else {
    itemMessage.style.color = "black";
    btnWriteMe.disabled = false;
  }
};
