"use strict";
const login = document.querySelector(".login-btn");
const login_page = document.querySelector(".login");
const add_to_do_list = document.querySelector(".add-to-do-list");
const add = document.querySelector(".add");
const toBuyList = document.querySelector(".input_content");
const list = document.getElementById("to-do-list");
const remove_btn = document.querySelector(".remove");
const curr_list = document.querySelector(".color");
const clear_all = document.querySelector(".clear_all");
login_page.classList.toggle("show_login");
/*
login.addEventListener("click", () => {
  login_page.style.opacity = 0;
});

*/
let count = 0;
document.addEventListener("keydown", function (e) {
  const input = toBuyList.value;
  if (e.key === "Enter" && !input.startsWith(" ") && input) {
    const html = `
    <div class="color">
      <li>${input}</li>
      <button class="remove item-${count}">remove</button>
      </div>
      `;
    count++;
    list.insertAdjacentHTML("afterbegin", html);
    toBuyList.value = "";
  }
});
document.addEventListener("click", function (e) {
  this.elem = e.target.closest("ul");
  const second_class = e.target.className.split(" ")[1];
  if (e.target.className.includes("remove")) {
    const li = e.target.closest(".color").children[0];
    const btn = e.target.closest(".color").children[1];
    const val = "<s>" + li.textContent + "</s>";
    e.target.closest(
      ".color"
    ).innerHTML = `<li style="word-break:break-all">${val}</li>
    <button class="remove item-${second_class}">X</button>`;
    // e.target.closest(".color").style.display = "none";
  }
});
clear_all.addEventListener("click", function (e) {
  //e.target.parentElement.children[2].children.remove();
  [...e.target.parentElement.children[2].children].forEach(function (elem) {
    elem.remove();
  });
  //e.target.closest(".add").children[2].style.display = "none";
});
