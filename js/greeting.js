const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginGreeting = document.querySelector(".login-form .greeting");

const account = document.querySelector(".account");
const logout = document.querySelector(".account__munu-item:last-child");
const accountMenu2 = document.querySelector(".account__menu");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDDEN_KEY);
  const userInput = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userInput);
  account.classList.remove(HIDDEN_KEY);
  accountMenu2.classList.add(HIDDEN_KEY);
  paintGreetings(userInput);
}

function paintGreetings(userInput) {
  loginGreeting.innerText = `hello🌸 ${userInput}`;
  loginGreeting.classList.remove(HIDDEN_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  loginInput.classList.add(HIDDEN_KEY);
  account.classList.remove(HIDDEN_KEY);
}

function onClickLogout() {
  localStorage.removeItem(USERNAME_KEY);
  account.classList.add(HIDDEN_KEY);
  loginGreeting.classList.add(HIDDEN_KEY);
  loginInput.classList.remove(HIDDEN_KEY);
  loginInput.value = "";
}

logout.addEventListener("click", onClickLogout);
