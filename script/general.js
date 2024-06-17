// MUSIC
document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("../sounds/background_suspense.mp3");
  audio.loop = true;
  audio.play().catch((e) => {
    console.error("Sound playback failed:", e);
  });
});

//for getting name of model animation
// document
//   .querySelector("#door01")
//   .addEventListener("model-loaded", function (e) {
//     const model = e.detail.model;
//     const animations = model.animations;
//     console.log(
//       "Available animations:",
//       animations.map((a) => a.name),
//     );
//   });

// collecting
document.addEventListener("key-collected", () => {
  const messageElement = document.getElementById("key-collected");
  messageElement.style.display = "block";

  // Set a timeout to hide the message after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1000);
});

// GameOver
document.addEventListener("game-over", () => {
  document.getElementById("game-over").style.display = "block";
});
