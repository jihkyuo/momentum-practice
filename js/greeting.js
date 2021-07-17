const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginGreeting = document.querySelector(".login-form .greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add("hidden");
  const userInput = loginInput.value;
  localStorage.setItem("username", userInput);
  paintGreetings(userInput);
}

function paintGreetings(userInput) {
  loginGreeting.innerText = `hello🌸 ${userInput}`;
  loginGreeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  loginInput.classList.add("hidden");
}
