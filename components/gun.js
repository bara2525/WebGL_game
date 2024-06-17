AFRAME.registerComponent("gun", {
  init: function () {
    console.log("Gun initialized");
    this.characterEl = null; // Initialize character entity reference
    this.gun_shot = new Audio("../sounds/gun_shot.mp3");
    this.gun_shot.load();
    this.gun_shot.volume = 0.2;
    // this.gun_shot.loop = true;

    document.addEventListener("gun-collected", (event) => {
      const characterEntity = event.detail.characterEntity;
      const firstCameraPosition = event.detail.firstCameraPosition;
      console.log("Gun collected!");
      this.characterEl = characterEntity;
      this.attachGunToCharacter(characterEntity, firstCameraPosition);
    });

    this.pointer = new THREE.Vector2();
    window.addEventListener("pointermove", this.onPointerMove.bind(this));
  },

  onPointerMove: function (event) {
    // Calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  },

  attachGunToCharacter: function (characterEntity, firstCameraPosition) {
    console.log("Attaching gun to character");
    const characterObject3D = characterEntity.object3D;
    let wristBone;

    // Traverse the character's 3D object to find the wrist bone
    characterObject3D.traverse((child) => {
      if (child.isBone && child.name === "WristR") {
        wristBone = child;
      }
    });

    if (wristBone) {
      const gunEntity = this.el;

      gunEntity.object3D.position.set(0.0, 0.002, -0.0005);
      gunEntity.object3D.rotation.set(0, 0, 1.5);
      gunEntity.object3D.scale.set(0.002, 0.002, 0.002);

      wristBone.add(gunEntity.object3D);

      console.log("Gun attached to the wrist");
      gunEntity.setAttribute("visible", true); // Make the gun visible
      this.enableShooting(firstCameraPosition); // Enable shooting when gun is attached
    } else {
      console.error("Wrist bone not found in the character model");
    }
  },

  enableShooting: function (firstCameraPosition) {
    console.log("enableShooting");
    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "r") {
        console.log("Shooting");

        this.shoot(firstCameraPosition);
      }
    });
  },

  shoot: function (firstCameraPosition) {
    const bullet = document.createElement("a-sphere");
    const sceneEl = document.querySelector("#my_scene");
    const cameraEl = document.querySelector("[camera]");
    const cameraObject3D = cameraEl.object3D;

    this.gun_shot.play();

    const cameraWorldPosition = new THREE.Vector3();
    cameraObject3D.getWorldPosition(cameraWorldPosition);

    cameraWorldPosition.y = cameraWorldPosition.y - 0.1;
    const bulletId = `bullet-${Date.now()}`;
    bullet.setAttribute("id", bulletId);

    bullet.setAttribute("radius", 0.1);
    bullet.setAttribute("color", "red");
    bullet.setAttribute("position", cameraWorldPosition);

    // Get camera's rotation in radians
    const cameraRotation = cameraEl.getAttribute("rotation");
    const radiansX = THREE.MathUtils.degToRad(cameraRotation.x);
    const radiansY = THREE.MathUtils.degToRad(cameraRotation.y);
    const radiansZ = THREE.MathUtils.degToRad(cameraRotation.z);
    console.log("cameraRotation", cameraRotation);

    //Calculate direction based on camera's rotation
    const direction = new THREE.Vector3(
      -Math.sin(radiansY) * Math.cos(radiansX),
      Math.sin(radiansX),
      -Math.cos(radiansY) * Math.cos(radiansX),
    );

    console.log("direction", direction);

    // Set bullet velocity
    const speed = 50; // Adjust bullet speed as needed
    bullet.setAttribute("velocity", {
      x: direction.x * speed,
      y: direction.y * speed,
      z: direction.z * speed,
    });
    console.log("bullet", bullet.getAttribute("velocity"));

    bullet.setAttribute("dynamic-body", {
      shape: "sphere",
      mass: 0.1,
    });

    sceneEl.appendChild(bullet);
    bullet.addEventListener("collide", this.handleBulletCollision.bind(this));

    // Remove the bullet after some time to clean up the scene
    setTimeout(() => {
      sceneEl.removeChild(bullet);
      this.gun_shot.pause();
      this.gun_shot.currentTime = 0;
    }, 5000);
  },

  CreateHitEvent(EvnName, collidedEntity)
  {
    console.log("Bullet collided with target!");
    const targetHitEvent = new CustomEvent(EvnName, {
      detail: {
        targetEntity: collidedEntity,
      },
    });
    document.dispatchEvent(targetHitEvent);
  },

  handleBulletCollision: function (event) {
    const collidedEntity = event.detail.body.el;
    console.log("Event: ", collidedEntity);

    // Check if the collided entity is a target
    if (collidedEntity.classList.contains("target")) {
      this.CreateHitEvent("targetHit", collidedEntity);
    }
    else if (collidedEntity.classList.contains("enemy")) {
      this.CreateHitEvent("enemyHit", collidedEntity);
    }
  },
});
