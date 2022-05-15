const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const frame = document.querySelector(".frame");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `반갑습니다 ${username}님! `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  frame.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);