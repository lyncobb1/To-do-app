function onReady () {

  let toDos =[];
  let id = 0;

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

function createNewToDo() {
  if(!newToDoText.value) { return; }

  toDos.push({
    title: newToDoText.value,
    id: id++,
    complete: false
   });

   newToDoText.value ='';
   renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newToDo = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');
    checkbox.type = "checkbox";
    newToDo.textContent = toDo.title;
    toDoList.appendChild(newToDo);
    newToDo.appendChild(checkbox);
  });

  function deleteToDo(id) {
    let toDos = toDo.filter(id => toDo.id !== id);
    if(toDo.id !== id) { return; }
  }

  deleteButton.addEventListener('click', event => {
    event.preventDefault();
    deleteToDo(toDo.id);
    renderTheUI();
  });
}

  renderTheUI();
 }

window.onload = function (){
  onReady();
};
