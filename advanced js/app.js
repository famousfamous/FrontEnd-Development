let paragraphElement = document.querySelector('p');

function chaneParagraphText(){
    paragraphElement.textContent = 'Clicked'
    console.log('Button Clicked!')
}
paragraphElement.addEventListener("click", chaneParagraphText);

//to listen to events with the input elememt
let inputElement = document.querySelector('input');

//prepare a function to do something with the input
function retrieveUserInput(event){
    let enteredText = inputElement.value;
    console.log(enteredText);
    console.log(event);
}

//use the function to power the event
inputElement.addEventListener('input', retrieveUserInput);