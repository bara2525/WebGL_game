// Get the modal
var modalWindow = document.getElementById("modal-content");
var modalButton = document.getElementById("modal-btn");
var modalClose = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
modalButton.onclick = function() 
{
  console.log("modal open");
  modalClickSound();
  modalWindow.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function() 
{
  console.log("modal close");
  modalClickSound();
  modalWindow.style.display = "none";
}

modalClose.onmouseover = () => modalHoverSound();
modalButton.onmouseover = () => modalHoverSound();

function modalClickSound() 
{
  const audioClick = document.getElementById("audioClick");
  audioClick.play();
}

function modalHoverSound() 
{
  const audioHover = document.getElementById("audioHover");
  audioHover.play();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == modalWindow) modalWindow.style.display = "none";
}