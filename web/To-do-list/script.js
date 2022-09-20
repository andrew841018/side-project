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
const add_list = document.querySelector(".new_list");
const user_account = document.getElementById("user-account");
login_page.classList.toggle("show_login");
login.addEventListener("click", () => {
  login_page.style.opacity = 100;
});
const margin_size = function (input_length) {
  let line = Math.floor(input_length / 18) + 1;
  let margin_bottom = 3.3 + 2.2 * (line - 1);

  return String(margin_bottom) + "rem";
};
let count = 0;
let chinese_count = 0;
const insert_list = function (e) {
  const input = toBuyList.value;
  let pattern = new RegExp("[\u4E00-\u9FA5]+"); //is chinese?
  if (pattern.test(input) && e.key === "Enter") {
    chinese_count++;
  }
  if (
    chinese_count == 2 ||
    (!pattern.test(input) &&
      e.key === "Enter" &&
      !input.startsWith(" ") &&
      input)
  ) {
    chinese_count = 0;
    const html = `
    <div class="color color-${count}">
    <li class="new_list" style="word-break:keep-all">${input}</li>
    <button class="remove item-${count}">X</button>
    </div>
    `;
    count++;
    list.insertAdjacentHTML("afterbegin", html);
    let curr = document.querySelector(`.color-${count - 1}`);
    curr.classList.add("new_list");
    curr.style.marginBottom = margin_size(input.length);
    toBuyList.value = "";
  }
};
const check_list = function (e) {
  this.elem = e.target.closest("ul");
  const second_class = e.target.className.split(" ")[1];
  if (e.target.className.includes("remove")) {
    const li = e.target.closest(".color").children[0];
    const btn = e.target.closest(".color").children[1];
    const val = "<s>" + li.textContent + "</s>";
    e.target.closest(
      ".color"
    ).innerHTML = `<li class="new_list" style="word-break:keep-all">${val}</li>
    <button class="remove item-${second_class}">X</button>`;
    // e.target.closest(".color").style.display = "none";
  }
};
const remove_all = function (e) {
  //e.target.parentElement.children[2].children.remove();
  [...e.target.parentElement.children[2].children].forEach(function (elem) {
    elem.remove();
  });
  //e.target.closest(".add").children[2].style.display = "none";
};
document.addEventListener("keydown", insert_list); //input new data
document.addEventListener("click", check_list); //X button
clear_all.addEventListener("click", remove_all); //clear all button
