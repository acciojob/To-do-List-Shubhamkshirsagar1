//your code here
let input = document.getElementById('newTodoInput');
let todoList = document.getElementById('todoList');


function addTodo(){
	let inputValue = input.value;
	todoList.append(inputValue);
}
addTodoBtn.addEventListener('click', addTodo)


