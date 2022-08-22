"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelectorAll(".btn"),
    item = document.querySelectorAll(".item"),
    text = document.querySelectorAll(".description"),
    img = document.querySelector(".img");

  btn[0].addEventListener("click", () => {
    item.forEach((i) => {
      i.classList.remove("red", "yellow", "green");
    });
    item[0].classList.add("red");
    text.forEach((i) => {
      i.classList.remove("show");
    });
    text[0].classList.add("show");
    img.classList.add("hiden");
  });
  btn[1].addEventListener("click", () => {
    item.forEach((i) => {
      i.classList.remove("red", "yellow", "green");
    });
    item[1].classList.add("yellow");
    text.forEach((i) => {
      i.classList.remove("show");
    });
    text[1].classList.add("show");
    img.classList.add("hiden");
  });
  btn[2].addEventListener("click", () => {
    item.forEach((i) => {
      i.classList.remove("red", "yellow", "green");
    });
    item[2].classList.add("green");
    text.forEach((i) => {
      i.classList.remove("show");
    });
    text[2].classList.add("show");
    img.classList.add("hiden");
  });
  btn[3].addEventListener("click", () => {
    item.forEach((i) => {
      i.classList.remove("red", "yellow", "green");
    });
    text.forEach((i) => {
      i.classList.remove("show");
    });
    img.classList.remove("hiden");
  });

  const timerAlert = setTimeout(function () {
    alert(
      "Для керування світлофором, натисніть на кнопку відповідного кольору"
    );
  }, 2000);
});
