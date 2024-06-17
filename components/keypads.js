AFRAME.registerComponent("keypads", {
  init() {
    this.enteredCode = "";
    this.correctCode = "3184"; // Change this to your correct code
    this.isVisible = false; // Flag to track visibility of the keypad modal
    console.log("Keypad started");
    this.el.addEventListener("keypad-interact", () => {
      console.log("Keypad received interaction from character");
      this.showKeypad();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.isVisible) {
        this.hideKeypad(); // Hide the keypad modal if it's visible
      } else if (event.key === "Enter" && this.isVisible) {
        this.checkCode(); // Check the entered code if "Enter" is pressed
      } else if (this.isVisible) {
        this.handleKeyInput(event); // Handle other key inputs if the modal is visible
      }
    });
  },

  toggleKeypad() {
    if (this.isVisible) {
      this.hideKeypad(); // Hide the keypad if it's visible
    } else {
      this.showKeypad(); // Show the keypad if it's hidden
    }
  },

  showKeypad() {
    const modalEl = document.createElement("div");

    modalEl.classList.add("keypad-modal");

    modalEl.innerHTML = `
      <div class="keypad-container">
        <div class="input-container">
          <input id="keypadInput" type="text" maxlength="4" placeholder="Enter Code">
        </div>
        <div class="keypad-buttons">
          <div class="button-container flex">
            <button class="keypad-button">1</button>
            <button class="keypad-button">2</button>
            <button class="keypad-button">3</button>
            <button class="keypad-button">4</button>
            <button class="keypad-button">5</button>
            <button class="keypad-button">6</button>
            <button class="keypad-button">7</button>
            <button class="keypad-button">8</button>
            <button class="keypad-button">9</button>
            <button class="keypad-button">0</button>
            <button class="keypad-button clear-button">C</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalEl);
    this.isVisible = true; // Set the visibility flag to true
  },

  hideKeypad() {
    const modalEl = document.querySelector(".keypad-modal");
    if (modalEl) {
      modalEl.remove(); // Remove the keypad modal
      this.isVisible = false; // Set the visibility flag to false
    }
  },

  handleKeyInput(event) {
    if (event.key >= "0" && event.key <= "9") {
      const keypadInput = document.getElementById("keypadInput");
      const currentInput = keypadInput.value;

      // Check if input length is less than max length
      if (currentInput.length < 4) {
        keypadInput.value = currentInput + event.key;
      }
    } else if (event.key === "Backspace") {
      // Handle Backspace key to remove last digit
      const keypadInput = document.getElementById("keypadInput");
      keypadInput.value = keypadInput.value.slice(0, -1);
    }
  },

  checkCode() {
    const keypadInput = document.getElementById("keypadInput");
    if (keypadInput.value === this.correctCode) {
      console.log("Correct"); // Log "Correct" if the entered code matches the correct code
      this.hideKeypad();
      //document.emit("portal-start");
      document
        .getElementById("elevator")
        .setAttribute(
          "animation-mixer",
          "clip: 01; loop: once; clampWhenFinished : true;",
        );
      this.el.emit("portal-start");
    } else {
      console.log("Incorrect"); // Log "Incorrect" if the entered code does not match the correct code
      keypadInput.value = ""; // Reset the entered code
    }
  },
});

export function GenerateKeypad() {
  return `
    <a-box id="keypad" keypads position="-5 4.3 -67" scale="1 1 1" rotation="0 180 0" gltf-model="#SecurityKeypad"></a-box>
  `;
}

function enterNumber(number) {
  const keypadComponent = document.querySelector("[keypad]");
  keypadComponent.handleInput(number);
}

// Function to clear the keypad input
function clearInput() {
  const keypadInput = document.getElementById("keypadInput");
  keypadInput.value = "";
}

// Function to submit the input and trigger an event
function submitInput() {
  const keypadComponent = document.querySelector("[keypad]");
  keypadComponent.handleInput(keypadInput.value);
}
