const todoListElem = document.querySelector('#todo-list');
console.log(todoListElem);
let todoList = [];

// createListItem(content)
//   generate html li element with text and return
function createListItem(text, id)
{
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item d-flex justify-content-between');
    li.innerHTML = `<div id="${id}">${text}</div><div><i class="fas fa-edit p-1"></i><i class="fas fa-trash-alt p-1"></i></div>`;
    return li;
}

console.log(createListItem('Testing'));
todoListElem.appendChild(createListItem('t', 1));
console.log(todoListElem.innerHTML);

// updateToDoList(todoList)
// run createlistitem on each elem of the main array
// set the innertext of ul to the generated html data

// An event listener on add, filter, delete and edit
// update the main array according to the change the user makes
// send new array through updatetodolist()


// <li class="list-group-item d-flex justify-content-between">
// <div>test</div>
// <div>
//   <i class="fas fa-edit"></i>
//   <i class="fas fa-trash-alt"></i>
// </div>
// </li>
// <li class="list-group-item">test</li>
// <li class="list-group-item">test</li>
