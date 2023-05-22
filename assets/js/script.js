var newTaskWrapper = document.getElementById("txtNewTask");
newTaskWrapper.addEventListener('onkeypress', function(e){
    if(e.key === "Enter"){
        console.log("apertou enter");
    }
    else{
        console.log("apertou outra coisa");
    }
})

function addNewTask() {
    var newTaskWrapper = document.getElementById("txtNewTask");
    var newTask = newTaskWrapper.value;

    var newTaskItem = document.createElement("LI");
    var txtTask = document.createTextNode(newTask);
    newTaskItem.appendChild(txtTask);

    var tasksListWrapper = document.getElementById("tasksList");

    if(!newTask == ""){
        tasksListWrapper.appendChild(newTaskItem);
    }
    
    newTaskWrapper.value = "";
}

// Add a "checked" symbol when clicking on a list item
var tasksListWrapper = document.getElementById("tasksList");
tasksListWrapper.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);