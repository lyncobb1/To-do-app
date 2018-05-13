function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteButton = document.getElementById('deleteButton');
  // add event listenr for delete button click
  // // find all checked checkboxes
  // // remove those from the toDoList

   addToDoForm.addEventListener('submit', event => {
     event.preventDefault();
     let title = newToDoText.value;
     let newLi = document.createElement('li');
     let checkbox = document.createElement('input');
     checkbox.type = "checkbox";
     newLi.textContent = title;
     newLi.appendChild(checkbox);
     toDoList.appendChild(newLi);
     newToDoText.value = '';
   });

   deleteButton.addEventListener('click', event => {
     event.preventDefault();
     const box = document.getElementById('myCheckBox').checked;
     const text = document.getElementById('newLi');
     if (box.checked) {
         box.parentNode.removeChild(myCheckBox);
         text.parentNode.removeChild(newLi);
      }
   });

  }

window.onload = function (){
  onReady();
};
