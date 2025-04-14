//import axios from 'axios';
// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry');


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // Create elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h3");

  // Set class names, attributes, and text
  card.classList.add("dog-card");
  img.classList.add("dog-image");
  img.src = imageURL;
  img.alt = `A cute ${breed}`;
  title.textContent = breed;

  // Create the hierarchy
  card.appendChild(img);
  card.appendChild(title);

  // Add interactivity (optional)
  card.addEventListener("click", () => {
    alert(`You clicked on a ${breed}!`);
  });

  // Return the card
  return card;
}
entryPoint.appendChild(dogCardMaker({ imageURL: "https://dog.ceo/api/breeds/image/random", breed: "Labrador" }));


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
