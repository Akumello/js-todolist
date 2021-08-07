let todoListElem = document.querySelector('#todo-list');
let listFilterElem = document.querySelector('#list-filter');
let addItemTextArea = document.querySelector('#add-item-input');
let addItemButton = document.querySelector('#add-button');
let filter = '';
console.log(todoListElem);
let todoList = ['Walk the dog', 'Study javascript', 'Cook dinner'];

// createListItem(content)
//   generate html li element with text and return
function createListItem(text, id)
{
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item d-flex justify-content-between');
    li.setAttribute('id', `li-${id}`);
    li.innerHTML = `<div>${text}</div><input type="text" value="${text}" class="d-none" id="input-${id}"></input><div style="cursor: pointer;"><i class="fas fa-edit p-1"></i><i class="fas fa-save p-1 px-2 d-none"></i><i class="fas fa-trash-alt p-1"></i></div>`;
    return li;
}

// updateToDoList(todoList)
// run createlistitem on each elem of the main array
// set the innertext of ul to the generated html data
function updateToDoList(list)
{
    //* Clear the current elements
    while(todoListElem.firstChild) {
        todoListElem.removeChild(todoListElem.firstChild);
    }
    //*/

    let newList;
    if (filter) {
        newList = list.filter(listItem => {
            return listItem.includes(filter);
        });
    }
    else {
        newList = [...list];
    }

    // Display the todo list
    let i = 0;
    console.log(list);
    list.forEach(item => {
        console.log(item);
        if(item === newList[0]) {
            todoListElem.appendChild(createListItem(item, `${i}`));
            newList.shift();
        }
        i++;
    });
}

function addItem()
{
    const item = addItemTextArea.value;
    if(!item) { return; }
    addItemTextArea.value = '';
    todoList.push(item);
    updateToDoList(todoList);
}

// An event listener on add, filter, delete and edit
// update the main array according to the change the user makes
// send new array through updatetodolist()
listFilterElem.addEventListener('keyup', () => {
    filter = listFilterElem.value;
    updateToDoList(todoList);
});

addItemButton.addEventListener('click', addItem);
addItemTextArea.addEventListener('keyup', e => {
    if(e.keyCode === 13) {
        addItem();
    }
});

//######## Save, Edit, and Delete button functionality ########
todoListElem.addEventListener('click', e => 
{   // Delete button
    if(e.target.classList.contains('fa-trash-alt')){
        // Get index of the item to remove
        const num = /\d+/;
        const index = e.target.parentNode.parentNode.id.match(num)

        // Remove the item from the todo list
        todoList.splice(index, 1);

        updateToDoList(todoList);
    }

    // Save button
    if(e.target.classList.contains('fa-save')){
        console.log('test2');
        // Get index of the item to edit
        const num = /\d+/;
        const index = e.target.parentNode.parentNode.id.match(num);

        // Remove the item from the todo list
        let newToDo = document.querySelector(`#input-${index}`).value;
        // extract newToDo from input field
        todoList.splice(index, 1, `${newToDo}`);

        updateToDoList(todoList);
    }

    // Edit button
    if(e.target.classList.contains('fa-edit')){
        // Get index of the item to edit
        const num = /\d+/;
        const index = e.target.parentNode.parentNode.id.match(num)

        // Switch the sibling div to an input text field and change edit button to a save button
        e.target.classList.add('d-none');
        e.target.nextSibling.classList.remove('d-none');
        e.target.parentNode.parentNode.firstChild.nextSibling.classList.remove('d-none');;
        e.target.parentNode.parentNode.firstChild.setAttribute('class', 'd-none');
        console.log(e.target.parentNode);
    }
});

updateToDoList(todoList);