var todoInput = document.querySelector('.new-todo');

var todoList = document.querySelector('.todo-list');

todoInput.addEventListener('keydown', function addListItem(event) {

  if ( event.keyCode == 13 ) {

    event.target.value = "";

    var newTodoLi = document.createElement('li');

    newTodoLi .textContent = todoContent;

    todoList.appendChild(newTodoLi);
  }

  return event;
});
