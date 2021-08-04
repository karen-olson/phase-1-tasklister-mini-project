// Click some form of a submit button
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
    addEventListenerToDeleteButtons();
  });
});

// CB Function (when form is submitted) to Add an Item to the List
//    1) Create a new <p> element that will hold the new to do list item
//    2) Set the textContent of <p> to the value of the to do item (plus a space)
//    3) Append the new <p> element to the form, as a child element
//    4) Create a new <button> element
//    5) Set the textContent of the <button> to Done
//    6) Append the new <button> element to the <p>, as a child element
function toDoHandler(toDoItem) {
  const p = document.createElement("p");
  p.textContent = `${toDoItem} `;
  document.querySelector("form").appendChild(p);

  const button = document.createElement("button");
  button.textContent = "Done";
  button.id = "delete-button";
  p.appendChild(button);
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
//    1) Grab the buttons by their IDs using querySelectorAll (to get a list)
//    2) Iterate through the list of buttons and add an event listener to each one. Event - click, function - handleDelete
function addEventListenerToDeleteButtons() {
  const buttons = document.querySelectorAll("#delete-button");
  //console.log(buttons);
  for (const button of buttons) {
    button.addEventListener("click", handleDelete);
  }
}

//
