AFRAME.registerComponent("collider-check", {
  dependencies: ["raycaster"],

  init() {
    this.el.addEventListener("raycaster-intersection", (event) => {
      console.log("Player hit something!", event.detail.els);
      const intersectedEntities = event.detail.els;

      intersectedEntities.forEach((entity) => {
        console.log("Intersected entity ID:", entity.id);
        // Access attributes like class or any custom attributes
        console.log("Intersected entity class:", entity.getAttribute("class"));
        console.log(
          "Intersected entity customAttribute:",
          entity.getAttribute("customAttribute"),
        );

        // Handle specific interactions based on entity attributes
        if (entity.classList.contains("obstacle")) {
          this.handleObstacleCollision(entity);
        } else if (entity.classList.contains("collectible")) {
          this.handleCollectibleCollision(entity);
        } else if (entity.classList.contains("doors_model")) {
          this.handleDoorCollision(entity);
        }
        // Add more conditions as needed for other types of entities
      });
    });
  },

  handleObstacleCollision(entity) {
    // Handle obstacle collision logic here
    console.log("Collision with obstacle:", entity);
    // Reduce player health, emit events, etc.
  },

  handleCollectibleCollision(entity) {
    // Handle collectible collision logic here
    console.log("Collision with collectible:", entity);
    // Increase score, remove collectible, etc.
    entity.parentNode.removeChild(entity); // Example: remove collectible
  },
  handleDoorCollision(entity) {
    // Handle collectible collision logic here
    console.log("Collision with door:", entity);
    // Increase score, remove collectible, etc.
  },
});
