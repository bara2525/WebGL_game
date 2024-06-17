AFRAME.registerComponent("loading-screen", {
  init: function () {
    const loadingScreen = document.getElementById("loading-screen");
    const progressBarFill = document.getElementById("progress-bar-fill");

    // Hide the loading screen after 3 seconds (adjust as needed)
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds

    // Listen for progress events
    this.el.sceneEl.addEventListener("progress", function (evt) {
      if (evt.detail.total === 0) return;

      const progress = (evt.detail.loaded / evt.detail.total) * 100;
      progressBarFill.style.width = `${progress}%`;
    });

    // Listen for loaded event to ensure smooth transition
    this.el.sceneEl.addEventListener("loaded", function () {
      progressBarFill.style.width = "100%";
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 500); // Additional delay for smooth transition
    });
  },
});
