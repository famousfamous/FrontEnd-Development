document.body.children[1].children[0].href = 'https://google.com'
console.dir(document)
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://teabagmedia.com";

//1.Create an element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://teabagmedia.com";

newAnchorElement.textContent = "This takes you Teabag Media website.";

//2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");

//3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// How to remove element
let firstH1Element = document.querySelector("h1");
firstH1Element.remove();

//move the the "i'm new" paragraph to the end of the body
firstParagraph.parentElement.append(firstParagraph);

//InnerHTML feature
console.log(firstParagraph.innerHTML);
let addIt = "Hey, this is <strong>important!</strong>";
console.log(firstParagraph.innerHTML);
