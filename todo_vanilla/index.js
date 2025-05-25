const inputContainer = document.querySelector(".input-container");
const submitButton = document.querySelector(".submit-button");
//   console.log(inputContainer);
//   console.log(submitButton);
const inputContainerDimensions = inputContainer.getBoundingClientRect();
const widthToBeAddedForToDoItem = Math.floor(inputContainerDimensions?.width);
console.log(widthToBeAddedForToDoItem);
//   const inputContainerTotalDistanceX =
//     inputContainerDimensions?.x + inputContainerDimensions?.width;
//   console.log(inputContainerDimensions);
//   const submitDimensions = submitButton.getBoundingClientRect();
//   const submitButtonDimensionX = submitDimensions?.x;
//   const marginBetweenTheInputElements = Math.floor(
//     inputContainerTotalDistanceX - submitButtonDimensionX
//   );
//   console.log(marginBetweenTheInputElements);
//   console.log(dimensions);

function getTheInputFieldValue() {
  const inputField = document.querySelector(".input-field");
  let inputValue = inputField.value;
  inputField.addEventListener("input", function (e) {
    console.log("Live input:", e.target.value);
    inputValue = e.target.value;
  });

  return inputValue;
}

const name = getTheInputFieldValue();
console.log(name);

// const deleteButton = document.createElement("img");
// deleteButton.setAttribute("src", "./delete.png");
// deleteButton.setAttribute("id", "deleteIcon");
// deleteButton.setAttribute("alt", "Delete");

// console.log(deleteButton);

function createDeleteButton(todoElement) {
  const btn = document.createElement("img");
  btn.setAttribute("src", "./delete.png");
  btn.setAttribute("alt", "Delete");
  btn.setAttribute("class", "icon");
  btn.setAttribute("id", `${todoElement.id}`);
  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    todoElement.remove();
    btn.remove();
  });

  return btn;
}

function createEditButton(todoElement) {
  const btn = document.createElement("img");
  btn.setAttribute("src", "./editing.png");
  btn.setAttribute("alt", "Edit");
  btn.setAttribute("class", "icon");
  btn.setAttribute("id", `${todoElement.id}`);

  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    todoElement.toggleAttribute("disabled");
  });

  return btn;
}

function createSaveButton(todoElement) {
  const btn = document.createElement("img");
  btn.setAttribute("src", "./save.png");
  btn.setAttribute("alt", "Save");
  btn.setAttribute("class", "icon");
  btn.setAttribute("id", `${todoElement.id}`);

  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    todoElement.toggleAttribute("disabled");
  });

  return btn;
}

let toDoItems = [];
function handleSubmitButton() {
  //   const toDoItems = [];
  const todoContainer = document.querySelector(".todo-container");
  const todoElement = document.createElement("input");
  let inputValue = getTheInputFieldValue();
  const randomId = "todo-" + Math.random().toString(36).substr(2, 9);
  todoElement.setAttribute("id", randomId);

  console.log(inputValue);
  todoElement.setAttribute("value", inputValue);
  todoElement.setAttribute("class", "todoitems");
  todoElement.style.height = "50px";
  todoElement.style.marginLeft = "30px";
  //   todoElement.style.width = `${widthToBeAddedForToDoItem}px`;
  todoElement.setAttribute("id", randomId);
  //   todoElement.setAttribute("readonly", "true");
  todoElement.setAttribute("disabled", "true");
  toDoItems.push(todoElement);
  const deleteBtn = createDeleteButton(todoElement);
  const editBtn = createEditButton(todoElement);
  const savebtn = createSaveButton(todoElement);
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "todo-wrapper");

  wrapper.appendChild(todoElement);
  wrapper.appendChild(deleteBtn);
  wrapper.appendChild(editBtn);
  wrapper.appendChild(savebtn);
  todoContainer.appendChild(wrapper);

  todoElement.addEventListener("input", function (e) {
    inputValue = e.target.value;
  });
  // classic concept ? find out what is the issue
  //   todoContainer.addEventListener("click", function () {
  //     console.log("An even toccured on a todo element");
  //   });
  localStorage.setItem("todo", JSON.stringify(toDoItems));
  return toDoItems, inputValue;
}

document
  .querySelector(".todo-container")
  .addEventListener("click", function () {
    console.log("An event occurred on a todo element");
  });

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmitButton();
});
