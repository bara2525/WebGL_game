const doorAnimationList = [
  "0_idle_open_left",
  "0_idle_open_right",
  "1_open_closed_right",
  "2_open_closed_left",
  "3_close_right",
  "3_open_right",
  "4_close_left",
  "4_open_left",
];

AFRAME.registerComponent("doors", {
  schema: {
    opened: { type: "boolean", default: false },
  },

  init() {
    this.characterModel = this.el;
    this.characterModel.setAttribute("animation-mixer", {
      clip: doorAnimationList[4], // Ensure you're using the correct index for the open animation
      autoplay: true,
      loop: "once",
      crossFadeDuration: 0.4,
      clampWhenFinished : true
    });
    // Set initial closed state without playing the animation
    document.addEventListener("open-door", (event) => {
      const targetEntity = event.detail.targetEntity;
      // Check if the target entity is this entity
      if (targetEntity === this.el) {
        this.Open();
      }
    });
  },

  Open() {
    console.log("Opening");
    this.characterModel.setAttribute("animation-mixer", {
      clip: doorAnimationList[3], // Ensure you're using the correct index for the open animation
      autoplay: true,
      crossFadeDuration: 0.4,
    });
    this.characterModel.setAttribute("animation-mixer", {
      clip: doorAnimationList[0], // Ensure you're using the correct index for the open animation
      autoplay: true,
      crossFadeDuration: 0.4,
    });
    this.data.opened = true;

    // Wait for the animation to complete before setting to static
    setTimeout(() => {
      this.characterModel.removeAttribute("dynamic-body");
    });
  },

  Close() {
    console.log("Closing");
    this.characterModel.setAttribute("animation-mixer", {
      clip: doorAnimationList[0], // Ensure you're using the correct index for the close animation
      autoplay: true,
      crossFadeDuration: 0.4,
    });
    this.characterModel.setAttribute("static-body", {});
    this.data.opened = false;
  },
});

export function GenerateDoors() {
  return `
    <a-entity id="doors_model" doors position="0 0 -25" rotation="0 0 0" scale="3 3 3" gltf-model="#doors_model" dynamic-body></a-entity>
  `;
}
