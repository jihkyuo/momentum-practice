const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-form__list");
const todoDelList = document.querySelector(".todo-form__del-list");

let toDos = [];
let delBox = [];

function savedTodo() {
  localStorage.setItem("saveTodo", JSON.stringify(toDos));
  localStorage.setItem("saveDel", JSON.stringify(delBox));
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  savedTodo();
}

function paintTodo(item) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = item.text;
  const button = document.createElement("button");
  button.innerText = "✅";
  li.id = item.id;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function paintDelTodo(item) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = item.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.id = item.id;
  li.appendChild(span);
  li.appendChild(button);
  todoDelList.appendChild(li);
  button.addEventListener("click", deleteDelTodo);
}

function deleteTodo(event) {
  const BtnTargetLi = event.target.parentElement;
  const BtnTargetSpan = BtnTargetLi.children[0].innerText;
  const BtnTargetId = BtnTargetLi.id;
  let delTodo = {
    text: BtnTargetSpan,
    id: BtnTargetId,
  };
  delBox.push(delTodo);
  paintDelTodo(delTodo);
  BtnTargetLi.remove();
  console.log(BtnTargetId);
  console.log(toDos);
  toDos = toDos.filter((todo) => todo.id !== parseInt(BtnTargetId));
  savedTodo();
}

function deleteDelTodo(event) {
  const BtnDelTargetLi = event.target.parentElement;
  const BtnDelTargetId = BtnDelTargetLi.id;
  BtnDelTargetLi.remove();
  console.log(BtnDelTargetId);
  console.log(delBox.id);
  delBox = delBox.filter((todo) => todo.id !== BtnDelTargetId);
  console.log(delBox);
  savedTodo();
}

todoForm.addEventListener("submit", onTodoSubmit);

const getTodo = localStorage.getItem("saveTodo");
const getDelTodo = localStorage.getItem("saveDel");

if (getTodo && getDelTodo !== null) {
  const parstTodo = JSON.parse(getTodo);
  const parstDelTodo = JSON.parse(getDelTodo);
  toDos = parstTodo;
  delBox = parstDelTodo;
  console.log(delBox);
  toDos.forEach(paintTodo);
  delBox.forEach(paintDelTodo);
}
