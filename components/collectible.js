AFRAME.registerComponent("collectible", {
  schema: {
    health: { type: "number", default: 40 }, // Amount of health the potion refills
  },
  init: function () {
    const isKey = this.el.hasAttribute("keys");
    const isGun = this.el.hasAttribute("guns");
    const isBomb = this.el.hasAttribute("bombs");
    const isPliers = this.el.hasAttribute("pliers");
    console.log(
      isKey
        ? "Key initialized"
        : isGun
          ? "Gun initialized"
          : isBomb
            ? "Bomb initialized"
            : isPliers
              ? "Pliers initialized"
              : "Unknown collectible",
    );

    this.el.addEventListener("collide-with-character", () => {
      console.log("Key collided with character");

      // Remove the potion from the scene
      setTimeout(() => this.el.remove(), 0);
    });
  },
});
