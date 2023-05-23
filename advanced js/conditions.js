const remChar = document.getElementById("remaining-chars");
const prodName = document.getElementById("product-name");
const remNum =
  document.body.children[0].children[0].children[2].children[0].textContent;
  console.log(remNum)

function changeTextBg() {
  if (remNum === "10") {
    prodName.style.backgroundColor = "black";
  }
  console.log(remNum);
}
prodName.addEventListener("input", changeTextBg);
