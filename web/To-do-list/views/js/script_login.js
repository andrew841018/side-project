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
const show_passwd = document.querySelector(".show");
const input_passwd = document.getElementById("password");
const input_account = document.getElementById("user-account");
show_passwd.addEventListener("click", () => {
  if (input_passwd.type === "password") input_passwd.type = "text";
  else input_passwd.type = "password";
});
