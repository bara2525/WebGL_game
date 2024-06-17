document.addEventListener("gun-collected", () => {
    const messageElement = document.getElementById("pistolIcon");
    messageElement.style.display = "block";
});

document.addEventListener("key-collected", () => {
    const messageElement = document.getElementById("keyIcon");
    messageElement.style.display = "block";
});

document.addEventListener("pliers-collected", () => {
    const messageElement = document.getElementById("pliersIcon");
    messageElement.style.display = "block";
});

  function buttonClickSound() 
{
  const audioClick = document.getElementById("audioClick");
  audioClick.play();
}

function buttonHoverSound() 
{
  const audioHover = document.getElementById("audioHover");
  audioHover.play();
}

document.getElementById("restart-btn").onmouseover = () => buttonHoverSound();
document.getElementById("restart-btn").click = () => buttonClickSound();

document.getElementById("toggle-camera-btn").onmouseover = () => buttonHoverSound();
document.getElementById("toggle-camera-btn").click = () => buttonClickSound();