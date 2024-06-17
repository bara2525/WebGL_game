AFRAME.registerComponent("target", {
  schema: {
    health: { type: "number", default: 40 }, // Amount of health the target has
    maxHealth: { type: "number", default: 40 }, // Maximum health for the target
  },

  init: function () {
    // Create a health bar
    console.log("CREATIONNNNNNNNNNN");
    const healthBarBackground = document.createElement("a-plane");
    const healthBarForeground = document.createElement("a-plane");

    healthBarBackground.setAttribute("width", 1);
    healthBarBackground.setAttribute("height", 0.1);
    healthBarBackground.setAttribute("color", "red");
    healthBarBackground.setAttribute("position", "0 0.3 0"); // Position it above the target

    healthBarForeground.setAttribute("width", 1);
    healthBarForeground.setAttribute("height", 0.1);
    healthBarForeground.setAttribute("color", "green");
    healthBarForeground.setAttribute("position", "0 0 0.01"); // Slightly in front of the background

    // Attach health bar to the target entity
    healthBarBackground.appendChild(healthBarForeground);
    this.el.appendChild(healthBarBackground);

    // Store a reference to the health bar foreground for updates
    this.healthBarForeground = healthBarForeground;

    document.addEventListener("targetHit", this.handleTargetHit.bind(this));
  },

  handleTargetHit: function (event) {
    const targetEntity = event.detail.targetEntity;

    // Check if the target entity is this entity
    if (targetEntity === this.el) {
      console.log("Bullet collided with target!");

      // Handle target damage here
      this.data.health -= 10; // Reduce target health by 10
      this.updateHealthBar();

      // Check if target health is depleted
      if (this.data.health <= 0) {
        console.log("Target destroyed!");
        // Remove the target from the scene after a delay
        setTimeout(() => {
          this.el.parentNode.removeChild(this.el);
          this.checkAllTargetsDestroyed();
        }, 1000);
      }
    }
  },

  updateHealthBar: function () {
    const healthRatio = this.data.health / this.data.maxHealth;
    this.healthBarForeground.setAttribute("width", healthRatio);
    this.healthBarForeground.setAttribute(
      "position",
      `-${(1 - healthRatio) / 2} 0 0.01`,
    );
  },
  checkAllTargetsDestroyed: function () {
    window.remainingTargets--; // Decrease the count of remaining targets
    console.log(`${window.remainingTargets} targets remaining`);

    if (window.remainingTargets === 0) {
      console.log("All targets have been destroyed!");
      // Add any additional logic here, e.g., trigger an event or display a message
      const allTargetsDestroyedEvent = new CustomEvent("allTargetsDestroyed");
      document.dispatchEvent(allTargetsDestroyedEvent);
    }
  },
});
// Additional debug for scene loading and targets
document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");
  const targets = scene.querySelectorAll(".target");

  window.remainingTargets = targets.length;
  console.log(`Initialized with ${window.remainingTargets} targets`);

  targets.forEach((target, index) => {
    console.log(`Target ${index + 1}:`, target);
  });
});
