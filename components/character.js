import * as THREE from "three";
const animationList = [
  "CharacterArmature|Death", // 0
  "CharacterArmature|Gun_Shoot", // 1
  "CharacterArmature|HitRecieve", // 2
  "CharacterArmature|HitRecieve_2", // 3
  "CharacterArmature|Idle", // 4
  "CharacterArmature|Idle_Gun", // 5
  "CharacterArmature|Idle_Gun_Pointing", // 6
  "CharacterArmature|Idle_Gun_Shoot", // 7
  "CharacterArmature|Idle_Neutral", // 8
  "CharacterArmature|Idle_Sword", // 9
  "CharacterArmature|Interact", // 10
  "CharacterArmature|Kick_Left", // 11
  "CharacterArmature|Kick_Right", // 12
  "CharacterArmature|Punch_Left", // 13
  "CharacterArmature|Punch_Right", // 14
  "CharacterArmature|Roll", // 15
  "CharacterArmature|Run", // 16
  "CharacterArmature|Run_Back", // 17
  "CharacterArmature|Run_Left", // 18
  "CharacterArmature|Run_Right", // 19
  "CharacterArmature|Run_Shoot", // 20
  "CharacterArmature|Sword_Slash", // 21
  "CharacterArmature|Walk", // 22
  "CharacterArmature|Wave", // 23
];

const moveDirection = {
  w: "forward",
  a: "left",
  s: "backward",
  d: "right",
};

const moveSpeed = {
  w: "walk",
  r: "run",
  i: "idle",
};

let currentPosition = new THREE.Vector3(0, 0, 0);

AFRAME.registerComponent("circle-around", {
  schema: {
    radius: { type: "number", default: 5 },
  },

  tick: function () {
    if (!this.el.sceneEl.camera) return; // ignore when there is no camera

    const cam = this.el.sceneEl.camera.el; // get the camera entity
    const camRotation = cam.getAttribute("rotation").y; // get the camera's Y rotation in degrees

    // Calculate new position
    const distance = this.data.radius; // Distance from the center
    const angle = (camRotation * Math.PI) / 180; // Convert degrees to radians manually
    const newX = distance * Math.sin(angle);
    const newZ = distance * Math.cos(angle);

    // Set new position
    cam.setAttribute("position", {
      x: newX,
      y: cam.getAttribute("position").y,
      z: newZ,
    });
  },
});
AFRAME.registerComponent("rotate-with-camera", {
  tick: (function () {
    // create once
    const tmpq = new THREE.Quaternion();
    const tmpe = new THREE.Euler();
    const initialRotationQ = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      Math.PI,
    ); // 180 degrees in Y axis

    return function (t, dt) {
      if (!this.el.sceneEl.camera) return; // ignore when there is no camera
      const cam = this.el.sceneEl.camera.el; // get the camera entity
      cam.object3D.getWorldQuaternion(tmpq); // get the world rotation

      // Apply the initial rotation
      tmpq.multiply(initialRotationQ);

      tmpe.setFromQuaternion(tmpq, "YXZ");
      // set attribute is necesarry for wasd-controls
      this.el.setAttribute("rotation", {
        x: 0,
        y: (tmpe.y * 180) / Math.PI,
        z: 0,
      });
    };
  })(),
});

AFRAME.registerComponent("character", {
  schema: {
    hasKey: { type: "bool", default: false },
  },
  init() {
    this.isThirdPerson = true;
    this.footsteps = new Audio("../sounds/footsteps.mp3");
    this.footsteps.volume = 0.2;
    // this.footsteps.loop = true;

    this.health = 100;
    this.hasGun = false;
    this.hasPliers = false;
    this.hasKey = this.data.hasKey;
    console.log("this.hasKey", this.hasKey);
    this.collisionBodies = [];
    this.characterModel = this.el.children[0];
    this.moveState = {
      speed: "idle",
      direction: "forward",
      velocity: new CANNON.Vec3(0, 0, 0),
    };
    this.isJumping = false;
    this.jumpCooldown = false; // Jump cooldown flag
    this.rotationY = 0;
    //this.hasKey = false;
    this.keys = {
      w: false,
      a: false,
      s: false,
      d: false,
      shift: false,
    };
    //Keypad

    const keypad = document.getElementById("keypad");
    if (keypad != null) {
      keypad.addEventListener("click", () => {
        const characterPos = document
          .querySelector("#character")
          .getAttribute("position");

        const keypadPos = keypad.getAttribute("position");

        const distance = Math.sqrt(
          Math.pow(characterPos.x - keypadPos.x, 2) +
            Math.pow(characterPos.y - keypadPos.y, 2) +
            Math.pow(characterPos.z - keypadPos.z, 2),
        );

        if (distance < 7) {
          console.log("Character interacts with the keypad");
          keypad.emit("keypad-interact");
        }
      });
    }

    this.el.addEventListener("body-loaded", () => {
      this.body = this.el.body;
    });

    document.addEventListener("keydown", (event) => {
      console.log("event down", event.key, this.runningState);
      switch (event.key.toLowerCase()) {
        case "w":
          this.keys.w = true;
          this.startMoveAnimation(moveDirection.w, moveSpeed.w);
          break;
        case "a":
          this.keys.a = true;
          this.startMoveAnimation(moveDirection.a, moveSpeed.w);
          break;
        case "s":
          this.keys.s = true;
          this.startMoveAnimation(moveDirection.s, moveSpeed.w);
          break;
        case "d":
          this.keys.d = true;
          this.startMoveAnimation(moveDirection.d, moveSpeed.w);
          break;
        case "shift":
          this.keys.shift = true;
          this.startMoveAnimation(this.moveState.direction, moveSpeed.r);
          break;
        case " ":
          if (!this.isJumping && !this.jumpCooldown) this.jump();
          break;
        case "i":
          this.characterModel.removeAttribute("animation-mixer");
          this.characterModel.setAttribute("animation-mixer", {
            clip: animationList[23],
            crossFadeDuration: 0.4,
            loop: "once",
          });
          break;
        case "e":
          this.characterModel.removeAttribute("animation-mixer");
          this.characterModel.setAttribute("animation-mixer", {
            clip: animationList[10],
            crossFadeDuration: 0.4,
            loop: "once",
          });
        case "r":
          // Shooting animation if gun is visible
          if (
            this.characterModel.querySelector("#Pistol").getAttribute("visible")
          ) {
            this.characterModel.removeAttribute("animation-mixer");
            this.characterModel.setAttribute("animation-mixer", {
              clip: animationList[1], // Gun_Shoot animation
              crossFadeDuration: 0.2,
              loop: "once",
            });
          }
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      console.log("event up", event.key);
      switch (event.key.toLowerCase()) {
        case "w":
          this.keys.w = false;
          this.stop();
          break;
        case "a":
          this.keys.a = false;
          this.stop();
          break;
        case "s":
          this.keys.s = false;
          this.stop();
          break;
        case "d":
          this.keys.d = false;
          this.stop();
          break;
        case "shift":
          this.keys.shift = false;
          this.startMoveAnimation(this.moveState.direction, moveSpeed.w);
          break;
      }
    });

    this.el.addEventListener("collide", (event) =>
      this.processCollision(event),
    );
  },

  startMoveAnimation(direction, run) {
    this.footsteps.play().catch((e) => {
      console.error("Sound playback failed:", e);
    });
    if (direction === this.moveState.direction && run === this.moveState.speed)
      return;
    this.moveState.direction = direction;
    this.moveState.speed = run;

    if (direction == moveSpeed.i) return;

    const runClip = this.characterModel
      .querySelector("#Pistol")
      .getAttribute("visible")
      ? this.keys.shift
        ? animationList[20]
        : animationList[22] // Use run_shoot if shift is pressed, otherwise walk
      : this.keys.shift
        ? animationList[16]
        : animationList[22]; // Use run or walk animation

    this.characterModel.setAttribute("animation-mixer", {
      clip: runClip,
      loop: "repeat",
      crossFadeDuration: 0.4,
    });

    this.characterModel.setAttribute("animation-mixer", {
      clip: "run",
      crossFadeDuration: 0.2,
    });

    //add animation
    this.characterModel.setAttribute("animation-mixer", {
      clip: this.keys.shift ? animationList[16] : animationList[22],
      loop: "repeat",
      crossFadeDuration: 0.4,
    });
  },

  stop() {
    // this.footsteps.stop().catch((e) => {
    //   console.error("Sound playback failed:", e);
    // });
    if (this.isJumping) return;
    this.footsteps.pause();
    this.footsteps.currentTime = 0;
    this.moveState.direction = "idle";
    this.moveState.speed = "idle";
    this.moveState.velocity.set(0, this.moveState.velocity.y, 0);
    this.characterModel.setAttribute("animation-mixer", {
      clip: animationList[4],
      crossFadeDuration: 0.2,
      loop: "repeat",
    });
  },

  jump() {
    if (this.isJumping || !this.body || this.jumpCooldown) return; // Check if already jumping or jump cooldown is active
    this.isJumping = true;
    this.jumpCooldown = true; // Set jump cooldown
    console.log(this.isJumping);
    const jumpImpulse = new CANNON.Vec3(0, 7, 0); // Adjust the jump height here
    const worldPoint = new CANNON.Vec3().copy(this.body.position);
    this.body.applyImpulse(jumpImpulse, worldPoint);

    setTimeout(() => {
      this.isJumping = false;
      setTimeout(() => {
        this.jumpCooldown = false; // Reset jump cooldown after 300ms
      }, 1000);
    }, 1000);
  },

  tick() {
    if (this.body && this.moveState.velocity) {
      var speed = this.keys.shift ? 12 : 6; // Adjust the speed here
      var characterEntity = this.el;
      // console.log(characterEntity);
      if (characterEntity) {
        var manEntity = characterEntity.querySelector("#man");
        // console.log(manEntity);
        if (manEntity) {
          var manRotation = manEntity.getAttribute("rotation");
          // console.log(manRotation);
          if (manRotation) {
            var manRotationY = manRotation.y;
            var angle = (manRotationY * Math.PI) / 180;
            var x = Math.sin(angle);
            var z = Math.cos(angle);

            // Reset velocity to zero
            this.moveState.velocity.set(0, this.moveState.velocity.y, 0);

            // Adjust velocity based on keys
            if (this.keys.w) {
              this.moveState.velocity.x += x * speed;
              this.moveState.velocity.z += z * speed;
            }
            if (this.keys.s) {
              this.moveState.velocity.x -= x * speed;
              this.moveState.velocity.z -= z * speed;
            }
            if (this.keys.a) {
              this.moveState.velocity.x += z * speed;
              this.moveState.velocity.z -= x * speed;
            }
            if (this.keys.d) {
              this.moveState.velocity.x -= z * speed;
              this.moveState.velocity.z += x * speed;
            }
          }
        }
      }

      this.body.velocity.x = this.moveState.velocity.x;
      this.body.velocity.z = this.moveState.velocity.z;

      // Check if character falls below y = -5
      if (this.body.position.y < -5) {
        this.kill();
      }
    }
  },

  processCollision(event) {
    const otherEntity = event.detail.body.el;

    if (this.collisionBodies.includes(otherEntity)) {
      // console.log("Already collided with this entity");
      // console.log(this.collisionBodies);
      return;
    }

    this.collisionBodies.push(otherEntity);

    clearTimeout(this.clearTimeout);
    this.clearTimeout = setTimeout(() => {
      this.collisionBodies.splice(0, this.collisionBodies.length);
    }, 500);
    console.log(otherEntity);
    if (otherEntity.hasAttribute("doors")) {
      console.log(this.hasKey);
      if (this.hasKey) {
        const targetHitEvent = new CustomEvent("open-door", {
          detail: {
            targetEntity: otherEntity,
          },
        });
        document.dispatchEvent(targetHitEvent);
        // otherEntity.emit("open-door");
        console.log("character has key, opening the doors");
        otherEntity.setAttribute("doors", "opened", true);
      }
    }

    if (otherEntity.hasAttribute("obstacle")) {
      this.health -= 40;
      console.log("Health", this.health);

      if (this.health < 0) {
        document.getElementById("game-over").innerText = "Game Over";
        document.getElementById("game-over").style.display = "block";
      }

      console.log("Emitting collide-with-character event");
      otherEntity.emit("collide-with-character");
    } else if (otherEntity.hasAttribute("collectible")) {
      if (otherEntity.hasAttribute("collectible")) {
        const collectibleId = otherEntity.getAttribute("id");
        console.log("Collected item:", collectibleId);

        if (collectibleId === "keys") {
          console.log("Character collected a key");
          this.hasKey = true;
          document.dispatchEvent(new CustomEvent("key-collected"));
          otherEntity.emit("collide-with-character");
          setTimeout(() => {
            otherEntity.parentNode.removeChild(otherEntity);
            console.log("Collectible removed");
          }, 0);
          //Handle gun collect logic
        } else if (collectibleId === "guns") {
          console.log("Character collected a gun");
          const firstCameraPosition = document
            .querySelector("#first-camera")
            .getAttribute("position");
          console.log("First Camera Position:", firstCameraPosition);

          // Get the position of the third camera
          const thirdCameraPosition = document
            .querySelector("#third-camera")
            .getAttribute("position");
          console.log("Third Camera Position:", thirdCameraPosition);

          const characterEntity = document.querySelector("#character");
          document.dispatchEvent(
            new CustomEvent("gun-collected", {
              detail: {
                characterEntity: characterEntity,
                firstCameraPosition: firstCameraPosition,
              },
            }),
          );

          this.characterModel
            .querySelector("#Pistol")
            .setAttribute("visible", "true");

          otherEntity.emit("collide-with-character");
          setTimeout(() => {
            otherEntity.parentNode.removeChild(otherEntity);
            console.log("Gun removed");
          }, 0);
        } else if (collectibleId === "bombs") {
          if (this.hasPliers) {
            setTimeout(() => {
              otherEntity.parentNode.removeChild(otherEntity);
              console.log("Bomb removed");
              window.location.href = "ending-screen.html?outcome=win";
            }, 0);
          } else {
            this.explosion = new Audio("../sounds/explosion.mp3");
            const explosionClone = this.explosion.cloneNode();
            explosionClone.play().catch((e) => {
              console.error("Sound playback failed:", e);
            });

            console.log("Can't defuse the bomb");
            // Simulate explosion effect
            setTimeout(() => {
              otherEntity.parentNode.removeChild(otherEntity);
              // Redirect to ending screen after explosion effect
              window.location.href = "ending-screen.html?outcome=lose";
            }, 1000);
          }
        } else if (collectibleId === "pliers") {
          this.hasPliers = true;
          document.dispatchEvent(
            new CustomEvent("pliers-collected", {
              detail: {
                characterEntity: "",
                firstCameraPosition: "",
              },
            }),
          );
          setTimeout(() => {
            otherEntity.parentNode.removeChild(otherEntity);
            console.log("Pliers removed");
          }, 0);
        }
      }
    }
  },

  kill() {
    console.log("Character has fallen below y = -5. Killing character...");
    // Emit a custom event for game over
    /*const gameOverEvent = new CustomEvent('game-over');
        document.dispatchEvent(gameOverEvent);
        // Destroy the character entity
        this.el.parentNode.removeChild(this.el);*/
  },
});

let cameraPosition = {
  firstPerson: "0 4 -1",
  thirdPerson: "0 8 5",
};
let firstPerson = false;

export function GenerateCharacter(positions) {
  console.log("Generating Character...");
  console.log("inside current:", positions);

  const character = {
    gltfmodel: "#man",
    animationMixer: "clip:CharacterArmature|Idle; loop:true;",
    position: "0 0 0",
    rotation: "0 180 0",
    scale: "3 3 3",
  };
  if (positions != null) {
    character.position = `${positions.x} ${positions.y} ${positions.z}`;
  }

  //   return `
  //     <a-entity id="character" character dynamic-body="mass: 1; angularDamping: 1; shape: box;" position="0 0 0">
  //     <a-entity id="man" gltf-model="#man" animation-mixer="clip:CharacterArmature|Idle; loop:true;" rotation="0 180 0" scale="3 3 3">
  //     <a-entity id="Pistol" gltf-model="#Pistol" gun visible="false" scale="0.2 0.2 0.2" rotation="0 0 0"></a-entity>
  //     </a-entity>
  //     <a-entity raycaster="direction: 0 0 -1; far: 1;" position="0 1.5 0"></a-entity>
  //     <a-entity id="first-camera" camera position="0 5 -1" active="true" look-controls="pointerLockEnabled: true">
  //       <a-cursor></a-cursor>
  //     </a-entity>
  //     <a-entity id="third-camera" camera position="0 6 4" active="false" look-controls="pointerLockEnabled: true" orbit-controls="target: #character; minDistance: 2; maxDistance: 10; initialPosition: 0 5 10; rotateSpeed: 0.5">
  //       <a-cursor></a-cursor>
  //     </a-entity>
  //   </a-entity>
  //
  //
  //
  // `;

  return ` <a-entity id="character" character dynamic-body="mass: 1; angularDamping: 1; shape: box;" position="0 0.5 110">
            <a-entity id="man" gltf-model="#man" rotate-with-camera  animation-mixer="clip:CharacterArmature|Idle; loop:true;" rotation="0 180 0" scale="3 3 3">
                <a-entity id="Pistol" gltf-model="#Pistol" gun visible="false" scale="0.2 0.2 0.2" rotation="0 0 0"></a-entity>
            </a-entity>
            <a-entity raycaster="direction: 0 0 -1; far: 1;" position="0 1.5 0"></a-entity>
            <a-entity id="first-camera" camera position="0 5 -1" active="true" look-controls="pointerLockEnabled: true" circle-around="radius: -1">
                <a-cursor ></a-cursor>
            </a-entity>
            <a-entity id="third-camera" camera position="0 6 4" active="false" look-controls="pointerLockEnabled: true" orbit-controls="target: #character; minDistance: 2; maxDistance: 10; initialPosition: 0 5 10; rotateSpeed: 0.5">
                <a-cursor></a-cursor>
            </a-entity>
        </a-entity>`;
}

export function toggleCamera() {
  console.log("Toggle Camera");
  firstPerson = !firstPerson;

  const firstCameraEl = document.querySelector("#first-camera");
  const thirdCameraEl = document.querySelector("#third-camera");

  if (firstPerson) {
    firstCameraEl.setAttribute("camera", "active", true);
    console.log("camera first person");
    thirdCameraEl.setAttribute("camera", "active", false);
  } else {
    firstCameraEl.setAttribute("camera", "active", false);
    console.log("camera third person");
    thirdCameraEl.setAttribute("camera", "active", true);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "t") {
    toggleCamera();
  }
});
