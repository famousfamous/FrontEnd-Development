let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');


//setting the fixed maxlength to be dynamiccally pulled
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event){
let enteredText = event.target.value;
let enteredTextLength = enteredText.length;

//this does the maths or subtracting
let remainingCharacters = maxAllowedChars - enteredTextLength;

//and here, we set the value to the remaining span element for display.
remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);