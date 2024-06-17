AFRAME.registerComponent("lazy-load", {
  schema: { type: "selector" },
  init: function () {
    this.el.addEventListener("model-loaded", () => {
      // Hide the loading model
      this.el.setAttribute("visible", false);
    });
  },
  update: function () {
    console.log("update");
    const distance = this.el.object3D.position.distanceTo(
      this.data.object3D.position,
    );
    if (distance < 50) {
      // You can adjust the distance threshold
      this.el.setAttribute("visible", true);
    } else {
      this.el.setAttribute("visible", false);
    }
  },
});
