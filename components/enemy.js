import {changeProgressValueAndColor} from '../script/HealthBar'

AFRAME.registerComponent("enemy", {
    schema: {
      subject: {type: 'string', default: "character"},
      debug: {type: 'bool', default: false},
      health: { type: "number", default: 40 },
      fireRange: { type: "number", default: 20 },
      fireCadence: { type: "number", default: 2000 },
      showFireLine: { type: "bool", default: false }
    },
  
    init() 
    {

        this.EAnimations = {
            0: "CharacterArmature|Death",
            1: "CharacterArmature|Gun_Shoot",
            2: "CharacterArmature|HitRecieve",
            3: "CharacterArmature|HitRecieve_2",
            4: "CharacterArmature|Idle",
            5: "CharacterArmature|Idle_Gun",
            6: "CharacterArmature|Idle_Gun_Pointing",
            7: "CharacterArmature|Idle_Gun_Shoot",
            8: "CharacterArmature|Idle_Neutral",
            9: "CharacterArmature|Idle_Sword",
            10: "CharacterArmature|Interact",
            11: "CharacterArmature|Kick_Left",
            12: "CharacterArmature|Kick_Right",
            13: "CharacterArmature|Punch_Left",
            14: "CharacterArmature|Punch_Right",
            15: "CharacterArmature|Roll",
            16: "CharacterArmature|Run",
            17: "CharacterArmature|Run_Back",
            18: "CharacterArmature|Run_Left",
            19: "CharacterArmature|Run_Right",
            20: "CharacterArmature|Run_Shoot",
            21: "CharacterArmature|Sword_Slash",
            22: "CharacterArmature|Walk",
            23: "CharacterArmature|Wave",
        }

        //if(this.data.debug) this.GetAnimationNames();
        if(this.data.debug) console.log("schemas:", this.data.subject);
        this.subject = document.getElementById(this.data.subject);
        this.element = document.getElementById("enemy");
        var object3D = this.el.object3D;
        this.wasKilled = false;
    
        this.AddAudio(); 
        // this.AddRayCaster(); // create reycaster
        this.AddGun();

        document.addEventListener("enemyHit", this.handleTargetHit.bind(this));
    },
    update: function () {},
    tick: function () {
      if(this.wasKilled) return;
      let enemyPosition = this.el.object3D.position;
      let distance = enemyPosition.distanceTo(this.subject.object3D.position);
      let fd = this.data.fireRange;
      if(this.data.debug) console.log("distance: " + distance);
      if (distance > (fd+20)) this.SetAnimation(this.EAnimations[5], false, 0.4);
      else if (distance > (fd+10)) this.SetAnimation(this.EAnimations[6], false, 0.4);
      else if (distance < fd && this.canShoot) this.Fire();
      this.Follow();
    },
    remove: function () {},
    pause: function () {},
    play: function () {},
    Follow()
    {
        /// Funkce která otočí charakterem tak, aby se pořád
        /// dívala na hlavní kameru (postavu)

        const enemyPosition = new THREE.Vector3();
        const characterPosition = new THREE.Vector3();

        this.el.object3D.getWorldPosition(enemyPosition);
        this.subject.object3D.getWorldPosition(characterPosition);
        
        // Compute the direction vector in the XZ plane
        const directionX = characterPosition.x - enemyPosition.x;
        const directionZ = characterPosition.z - enemyPosition.z;

        // Compute the rotation needed
        const angle = Math.atan2(directionX, directionZ) * (180 / Math.PI);
        const rotation = `0 ${angle} 0`;

        //if(this.data.debug) console.log("angle: " + rotation);
        this.el.setAttribute('rotation', rotation);
    },
    GetAnimationNames()
    {
        // for getting name of model animation
        document.querySelector("#enemy").addEventListener("model-loaded", function (e) {
            const model = e.detail.model;
            const animations = model.animations;
            console.log("Available animations:", 
                animations.map((a) => a.name),);
        });
    },
    SetAnimation(AnimationName, repeat = "once", duration = 0.4, clampWhenFinished = false)
    {
        if(this.data.debug)  console.log("Animation: ", AnimationName, repeat, duration);
        this.el.removeAttribute("animation-mixer");
        this.el.setAttribute("animation-mixer", {
            clip: AnimationName,
            loop: repeat,
            crossFadeDuration: duration,
            clampWhenFinished : clampWhenFinished
          });
    },
    Fire()
    {
        this.canShoot = false;
        this.audio.play();
        //if(this.data.debug)  console.log('Raycaster objects:', this.raycaster.getAttribute('raycaster').objects);
        //this.raycaster.components.raycaster.refreshObjects();
        /*const interacts = this.raycaster.components.raycaster.intersectedEls;

        if (interacts.length > 0) 
        {
            //if(this.data.debug) console.log('HIT', interacts[0]);
            //if(this.data.debug) console.log("element:", interacts[0].getAttribute('id'))
            if (interacts[0].getAttribute('id') == "man")  
            {
                changeProgressValueAndColor(-10, 50);
            }
        }
        else console.log('No hit');
        */

        if(this.data.debug) console.log('HIT', interacts[0]);
        changeProgressValueAndColor(-10, 50);

        setTimeout(() => {
            this.canShoot = true; // Po 4 sekundách povolíme další střelbu
        }, this.data.fireCadence);
        this.SetAnimation(this.EAnimations[6], false, 0.00);
    },
    AddGun()
    {
      this.canShoot = true;
        this.gunEntity = document.createElement('a-entity');
        this.gunEntity.setAttribute('gltf-model', '../models/Pistol.glb');
        this.gunEntity.setAttribute('position', '-0.1 1.35 0.65',);
        this.gunEntity.setAttribute('scale', '0.1 0.1 0.1',);
        this.gunEntity.setAttribute('rotation', '0 -90 0',);
        this.el.appendChild(this.gunEntity);
/*
        let wristBone;
        console.log("POKUS", this.el);
        const characterObject3D = this.el.object3D;    
        const aaa = this.el.object3D.children;//.children[0];
        console.log(aaa);
        // Traverse the character's 3D object to find the "Wrist.L" bone
        characterObject3D.traverse((child) => {
          console.log("Traversing child:", child);
          if (child.isBone && child.name === "Wrist.L") {
            wristBone = child;
          } else if (child.children && child.children.length > 0) 
            {
            console.log("Child has nested children:", child.children);
            console.log("nested:", child.children.length);
            child.children.forEach((nestedChild) => {
                if(nestedChild.name === "Root_Scene") console.log("SCENE")
              if (nestedChild.isBone && nestedChild.name === "Wrist.L") {
                wristBone = nestedChild;
              }
            });
          }
        });
        if (wristBone) {
            console.log("Wrist.L bone found:", wristBone);
          } else {
            console.log("Wrist.L bone not found.");
          }*/
    },
    AddRayCaster()
    {
      this.raycaster = document.createElement('a-entity');
      this.raycaster.setAttribute('raycaster', {
          object3D: ".character",//`#${this.data.subject}`,
          direction: '0 0 1',
          far: this.data.fireRange,
          showLine: this.data.showFireLine,
      });
      this.raycaster.setAttribute('position', '0 1 1',)
      this.el.appendChild(this.raycaster);
    },
    AddAudio()
    {
      this.audio = new Audio('../sounds/gun_shot.mp3');
      this.audio.load();
      this.audio.volume = 0.2;
    },
    handleTargetHit: function (event)
    {
      if (this.wasKilled) return;
      console.log("HIIIIIIIIIIIIIIIIIIIT", event.detail.targetEntity)
      const targetEntity = event.detail.targetEntity;
      // Check if the target entity is this entity
      if (targetEntity === this.el) 
      {
        if(this.data.debug) console.log("Bullet collided with target!");
        this.data.health -= 10; // Reduce target health by 10
      }

      if (this.data.health <= 0) 
        {
          this.wasKilled = true;
          if(this.data.debug) console.log("Enemy was killed!");
          this.SetAnimation(this.EAnimations[0], "once", 0.4, true);
          // Remove the target from the scene after a delay
          setTimeout(() => {
            console.log("chcipl", event.detail.targetEntity);
              this.el.removeAttribute('static-body');
              if (this.el.destroy) {
                  this.el.destroy();
              } else {
                  this.el.parentNode.removeChild(this.el);
              }
          }, 2000);
        }  
    }
});