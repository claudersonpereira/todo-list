//Add 'Delete' button on tasks
var itemTaskList = document.getElementsByTagName("LI");
for (var i = 0; i < itemTaskList.length; i++) {
  var btnDelTask = document.createElement("SPAN");
  var txtBtnDelTask = document.createTextNode("\u00D7");
  btnDelTask.className = "btn-del-task";
  btnDelTask.appendChild(txtBtnDelTask);

  itemTaskList[i].appendChild(btnDelTask);
}

// Click on a close button to hide the current list item
var deltask = document.getElementsByClassName("btn-del-task");
for (var i = 0; i < deltask.length; i++) {
  deltask[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var tasksListWrapper = document.getElementById("tasksList");
tasksListWrapper.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

//Press 'Enter' to add new task
var newTaskWrapper = document.getElementById("txtNewTask");
newTaskWrapper.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("btnAddNewTask").click();
  }
});

//Add new task function
function addNewTask() {
  var newTaskWrapper = document.getElementById("txtNewTask");
  var newTask = newTaskWrapper.value;

  var newTaskItem = document.createElement("LI");
  var txtTask = document.createTextNode(newTask);
  newTaskItem.appendChild(txtTask);

  var tasksListWrapper = document.getElementById("tasksList");

  if (!newTask == "") {
    tasksListWrapper.appendChild(newTaskItem);
  }

  newTaskWrapper.value = "";

  var btnDelTask = document.createElement("SPAN");
  var txtBtnDelTask = document.createTextNode("\u00D7");
  btnDelTask.className = "btn-del-task";
  btnDelTask.appendChild(txtBtnDelTask);
  newTaskItem.appendChild(btnDelTask);

  for (var i = 0; i < deltask.length; i++) {
    deltask[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
