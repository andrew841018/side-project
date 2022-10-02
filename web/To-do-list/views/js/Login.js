/* eslint-disable */
const Login = (acc, passwd) => {
  console.log(`${acc} ${passwd}`);
};
document.getElementById("login_submit").addEventListener("click", (e) => {
  e.preventDefault();
  const account = document.getElementById("user-account").value;
  const password = document.getElementById("password").value;
  Login(account, password);
});
