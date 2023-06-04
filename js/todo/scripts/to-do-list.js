const todoList = [{
    name:'drink water', 
    dueDate:'2022-12-22'
}, {
    name:'learn on duolingo',
    dueDate: '2022-11-22'},
 
    {name:'watch the celtics',
    dueDate: '2022-10-11'
}];


function renderTodoList() {

    let todoListHMTL = '';

    for (i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html = `
          <div>${name}</div> 
          <div>${dueDate}</div>
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
          " class="delete-todo-button ">Delete</button> 
          
        `;
        todoListHMTL += html;

    }
    

    document.querySelector('.js-todo-list').
    innerHTML = todoListHMTL;

};

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.
   querySelector('.js-due-date-input');

   const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
  });
  
  
  

  inputElement.value = '';

  renderTodoList();
}