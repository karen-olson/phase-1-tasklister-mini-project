// MAIN FUNCTION
//    1) Wait until the DOM content is loaded to do anything.
//    2) Grab the "form" element.
//    3) Listen for the 'submit' event to happen on the 'form' element.
//    4) When you hear the submit event, tell the event NOT to do its default behavior of refreshing the page.
//    5) Get the value of the new to do list item
//    6) Call toDoHandler when the form is submitted, and give it the to do list item
//    7) Call addEventListenerToDeleteButtons, so that the event listener is added, and calls handleDelete when a button is clicked.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newListItem = e.target["new-task-description"].value;
    toDoHandler(newListItem);
    console.log(toDoHandler(newListItem)(liClosure));
    addEventListenerToDeleteButtons();
  });
});

// CB Function (when form is submitted) to Add an Item to the List
//    1) Create a new <li> element that will hold the new to do list item
//    2) Set the textContent of <li> to the value of the to do item (plus a space)
//    2.1) Set up an event listener to hear when a dropdown item is selected
//    2.2) When a dropdown item is selected, call changeLiColor
//    2.3) changeLiColor accesses the value of the dropdown item
//    2.4)       and selects a co
//    3) Append the new <li> element to the form, as a child element
//    4) Create a new <button> element
//    5) Set the textContent of the <button> to Done
//    6) Append the new <button> element to the <li>, as a child element
function toDoHandler(toDoItem) {
  const li = document.createElement("li");
  li.textContent = `${toDoItem} `;
  document.querySelector("#tasks").appendChild(li);
  const button = document.createElement("button");
  button.textContent = "Done";
  button.id = "delete-button";
  li.appendChild(button);
  const findLi = document.querySelector("#tasks li").textContent;
  findLi.style.color = "blue";
  console.log(`Heres the li: ${findLi}`);
}

// Change the color of the <li> based on the priority level
//    1) Add an event listener to the dropdown menu
//    2) Detemine which dropdown menu item was clicked
//    3) Based on which item was clicked, change the color of <li>

// Dropdown menu listener
document
  .querySelector("#priority-levels")
  .addEventListener("change", changeLiColor);

// Change LI color callback function
//    1) Find out which dropdown menu item was clicked
//    2) Access the li item that was just added
//    ?) Reset the value of li.styles.color accordingly
function changeLiColor(e) {
  const value = e.target.value;
  console.log(value);
  //const li = document.querySelector("#tasks li");
  //console.log(li);

  if (value === "high") {
    console.log("high priority: ");
    li.style.color = "red";
  } else if (value === "medium") {
    console.log("medium priority: ");
    li.style.color = "green";
  } else if (value === "low") {
    console.log("low priority: ");
    li.style.color = "yellow";
  }
}

// Delete the List Item and Button on a Click
//    1) Add an event listener to the button elements which watches for them to be clicked
//    2) Write a callback function that deletes the buttons and list item when the button is clicked

// CB function to delete the task
//    1) Create a function and define the event as a parameter
//    2) Grab the event target's parent node (?????? what is it ????)
//    3) Call remove() on the event target's parent node
function handleDelete(e) {
  console.log(e.target.parentNode);
  e.target.parentNode.remove();
}

// Accessing the delete buttons and adding event listeners to them
//    1) Create a function that adds an event listener to the "delete" buttons
//    2)
function addEventListenerToDeleteButtons() {
  const buttons = document.querySelectorAll("#delete-button");
  console.log(buttons);
  for (const button of buttons) {
    button.addEventListener("click", handleDelete);
  }
}
