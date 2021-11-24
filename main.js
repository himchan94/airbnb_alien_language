"use strict";

const inputBox = document.querySelector("#before_converted");
const outputBox = document.querySelector("#after_converted");
const btn = document.querySelector(".btn");

const korean_obfuscation = (text) => {};

btn.addEventListener("click", () => {
  console.log(inputBox.value);
});
