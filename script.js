var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

var cancelbook=document.getElementById("cancel-book")

cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
popupbox.style.display = "none"
})

var addbook=document.getElementById("add-book")
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")


addbook.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  div.className = "book-container";

  div.innerHTML = `
    <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebutton(event)">Delete</button>
  `;
  popupoverlay.style.display="none"
popupbox.style.display = "none"

  container.append(div);
});

function deletebutton(event){
event.target.parentElement.remove()
}
