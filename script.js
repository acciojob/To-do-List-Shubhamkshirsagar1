const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", function() {
  const newTodo = input.value.trim();
  if (newTodo !== "") {
    const listItem = document.createElement("li");
    listItem.innerText = newTodo;
    list.appendChild(listItem);
    input.value = "";
  }
});


