import "./style.css";
import "aframe";
import "aframe-physics-system";
import "aframe-extras";

import "./components/rotatable";
import "/components/portal";
import "./components/modules";
import "./components/collider-check";
import "./components/intersection-spawn";
import "./components/random-color";
import "./components/snap";
import "./components/collectible";
import "./components/gun";
import "./components/target";
import "./components/bullet";
import "./components/loading-screen";

import "./helper_functions/change_color";
import "./helper_functions/hitbox-debug";
import "./helper_functions/custom-hitbox";

import "./script/modal";
import "./script/panel";
import { SethealthBarVal } from "./script/HealthBar";

import { bombTimer } from "./script/bombTimer";

import { GenerateCharacter, toggleCamera } from "./components/character";
import { GenerateWall, GenerateFloors } from "./components/wall";
import { GenerateEnv } from "./components/enviroment";
import { GenerateKeypad } from "./components/keypads";
import {
  GenerateBomb,
  GenerateCamera,
  GenerateGun,
  GenerateKey,
  GeneratePliers,
} from "./components/Items";
import {
  Exterior,
  GenerateStairs,
  InteriorFirstFloor,
} from "./components/interier";

import { GenerateDoors } from "./components/door";

window.toggleCamera = toggleCamera; // Make toggleCamera globally accessible

SethealthBarVal();

const timer = new bombTimer();
timer.getTimeFromStorage();
timer.startTimer();

function ImportAssets() {
  return `

    <a-assets>        
        <a-asset-item id="walls" src="/models/walls.glb"></a-asset-item>
        <a-asset-item id="spikes" src="/models/spikes.glb"></a-asset-item>
        <a-asset-item id="spikes-animated" src="/models/spikes-animated.glb"></a-asset-item>
        <a-asset-item id="house-door" src="/models/HouseInteriorPack/Door.glb"></a-asset-item>

        <!-- Interier -->
        <a-asset-item id="L-stairs" src="/models/FurnitureKit/Stairs Corner.glb"></a-asset-item>
        <a-asset-item id="O-stairs" src="/models/FurnitureKit/Stairs Open.glb"></a-asset-item>
        <a-asset-item id="M-stairs" src="/models/bulding/modularStairs.glb"></a-asset-item>
        <a-asset-item id="building" src="/models/bulding/Building.glb"></a-asset-item>
        <a-asset-item id="buildingDoors" src="/models/bulding/buildingDoors.glb"></a-asset-item>
        <a-asset-item id="buildingNoDoor" src="/models/bulding/buildingNoDoor.glb"></a-asset-item>
        
        
        <!-- Interier Right Upper room-->
        <a-asset-item id="Table Coffee" src="/models/FurnitureKit/Table Coffee.glb"></a-asset-item>
        <a-asset-item id="Rug Square" src="/models/FurnitureKit/Rug Square.glb"></a-asset-item>
        <a-asset-item id="Lounge Design Sofa Corn" src="/models/FurnitureKit/Lounge Design Sofa Corn.glb"></a-asset-item>
        <a-asset-item id="Lounge Design Chair" src="/models/FurnitureKit/Lounge Design Chair.glb"></a-asset-item>
        <a-asset-item id="Lounge Design Chair" src="/models/FurnitureKit/Lounge Design Chair.glb"></a-asset-item>
        <a-asset-item id="Lounge Design Sofa" src="/models/FurnitureKit/Lounge Design Sofa.glb"></a-asset-item>
        <a-asset-item id="Lamp Round Floor" src="/models/FurnitureKit/Lamp Round Floor.glb"></a-asset-item>
        <a-asset-item id="Television" src="/models/FurnitureKit/Television.glb"></a-asset-item>
        <a-asset-item id="Cabinet Television Doo" src="/models/FurnitureKit/Cabinet Television Doo.glb"></a-asset-item>
        
        <!-- Interier Right Lower room -->
        <a-asset-item id="Lounge Sofa Long" src="/models/FurnitureKit/Lounge Sofa Long.glb"></a-asset-item>
        <a-asset-item id="Lounge Chair" src="/models/FurnitureKit/Lounge Chair.glb"></a-asset-item>
        <a-asset-item id="Rug Rounded" src="/models/FurnitureKit/Rug Rounded.glb"></a-asset-item>
        <a-asset-item id="Potted Plant" src="/models/FurnitureKit/Potted Plant.glb"></a-asset-item>
        <a-asset-item id="Speaker Small" src="/models/FurnitureKit/Speaker Small.glb"></a-asset-item>
        <a-asset-item id="Potted Plant" src="/models/FurnitureKit/Potted Plant.glb"></a-asset-item>
        <a-asset-item id="Picture frame" src="/models/FurnitureKit/Picture frame.glb"></a-asset-item>
        
        <!-- Interier Kitchen -->
        <a-asset-item id="Kitchen Fridge" src="/models/FurnitureKit/Kitchen Fridge.glb"></a-asset-item>
        <a-asset-item id="Kitchen Sink" src="/models/FurnitureKit/Kitchen Sink.glb"></a-asset-item>
        <a-asset-item id="Kitchen Cabinet Upper" src="/models/FurnitureKit/Kitchen Cabinet Upper.glb"></a-asset-item>
        <a-asset-item id="Kitchen Bar" src="/models/FurnitureKit/Kitchen Bar.glb"></a-asset-item>
        <a-asset-item id="Kitchen Stove Electric" src="/models/FurnitureKit/Kitchen Stove Electric.glb"></a-asset-item>
        <a-asset-item id="Chair" src="/models/FurnitureKit/Chair.glb"></a-asset-item>
        <a-asset-item id="Stool Bar Square" src="/models/FurnitureKit/Stool Bar Square.glb"></a-asset-item>
        <a-asset-item id="Table" src="/models/FurnitureKit/Table.glb"></a-asset-item>
        <a-asset-item id="Kitchen Blender" src="/models/FurnitureKit/Kitchen Blender.glb"></a-asset-item>
        
        <a-asset-item id="Bench" src="/models/FurnitureKit/Bench.glb"></a-asset-item>
        <a-asset-item id="Books" src="/models/FurnitureKit/Books.glb"></a-asset-item>
        <a-asset-item id="Toaster" src="/models/FurnitureKit/Toaster.glb"></a-asset-item>
        <a-asset-item id="Bench Cushion" src="/models/FurnitureKit/Bench Cushion.glb"></a-asset-item>
        <a-asset-item id="Ceiling Fan" src="/models/FurnitureKit/Ceiling Fan.glb"></a-asset-item>
        <a-asset-item id="Coat Rack" src="/models/FurnitureKit/Coat Rack.glb"></a-asset-item>
        <a-asset-item id="Lamp Wall" src="/models/FurnitureKit/Lamp Wall.glb"></a-asset-item>
        <a-asset-item id="Wall_Art_01" src="/models/FurnitureKit/Wall_Art_01.glb"></a-asset-item>
        <a-asset-item id="Wall_Art_02" src="/models/FurnitureKit/Wall_Art_02.glb"></a-asset-item>
        <a-asset-item id="Wall_Art_03" src="/models/FurnitureKit/Wall_Art_03.glb"></a-asset-item>

   
      
        
        <!-- Bedroom -->
         <a-asset-item id="Bed Double" src="/models/FurnitureKit/Bed Double.glb"></a-asset-item>
        <a-asset-item id="Bookcase Closed Doors" src="/models/FurnitureKit/Bookcase Closed Doors.glb"></a-asset-item>
        <a-asset-item id="Bookcase Closed Wide" src="/models/FurnitureKit/Bookcase Closed Wide.glb"></a-asset-item>
        <a-asset-item id="Coat Rack Standing" src="/models/FurnitureKit/Coat Rack Standing.glb"></a-asset-item>
        <a-asset-item id="Desk Corner" src="/models/FurnitureKit/Desk Corner.glb"></a-asset-item>
        <a-asset-item id="Computer Screen" src="/models/FurnitureKit/Computer Screen.glb"></a-asset-item>
        <a-asset-item id="Rug Round" src="/models/FurnitureKit/Rug Round.glb"></a-asset-item>
        
        
        

        
        
 
        
        
        

        <a-asset-item id="doors_model" src="/models/bulding-parts/wooden_door.glb"></a-asset-item>
        
        
        <a-asset-item id="Wall Doorway" src="/models/FurnitureKit/Wall Doorway.glb"></a-asset-item>
        <a-asset-item id="Wall Doorway Wide" src="/models/FurnitureKit/Wall Doorway Wide.glb"></a-asset-item> 
        <a-asset-item id="normalWall" src="/models/FurnitureKit/Normal Wall.glb"></a-asset-item>
        
        
        <!-- Env -->
        <a-asset-item id="trees" src="/models/trees/Trees.glb"></a-asset-item>
        <a-asset-item id="bulding" src="/models/Building.glb"></a-asset-item>
        <a-asset-item id="man" src="/models/humans/Astronaut.glb"></a-asset-item>
        
        <!-- Items -->
        <a-asset-item id="gun" src="/models/items/Rigged Glock 19.glb"></a-asset-item>
        <a-asset-item id="safe" src="/models/items/Safe.glb"></a-asset-item>
        <a-asset-item id="camera" src="/models/SecurityCamera.glb"></a-asset-item>
        <a-asset-item id="key" src="/models/key.glb"></a-asset-item>
        <a-asset-item id="SecurityKeypad" src="/models/SecurityKeypad.glb"></a-asset-item>
        <a-asset-item id="Elevator" src="/models/Elevator.glb"></a-asset-item>
        <a-asset-item id="Pistol" src="/models/Pistol.glb"></a-asset-item>
        <a-asset-item id="Bomb" src="/models/bomb.glb"></a-asset-item>
        <a-asset-item id="Plier" src="/models/Pliers.glb"></a-asset-item>
        
        <!-- Sound -->
        <audio id="background-sound" src="/sounds/background_suspense.mp3" muted></audio>
        <audio id="footstep-audio" src="/sounds/footsteps.mp3" preload="auto"></audio>
        <audio id="gun_shot" src="./sounds/gun_shot.mp3" preload="auto"></audio>
        <audio id="explosion" src="./sounds/explosion.mp3" preload="auto"></audio>
        
      
        <!-- Exterior-->
        <a-asset-item id="building_2" src="/models/building/building_2.glb"></a-asset-item>
        <a-asset-item id="building_1" src="/models/building/building_1.glb"></a-asset-item>
        <a-asset-item id="building_3" src="/models/building/building_3.glb"></a-asset-item>
        <a-asset-item id="building_4" src="/models/building/building_4.glb"></a-asset-item>
        <a-asset-item id="building_5" src="/models/building/building_5.glb"></a-asset-item>
        <a-asset-item id="building_6" src="/models/building/building_6.glb"></a-asset-item>
        <a-asset-item id="building_7" src="/models/building/building_7.glb"></a-asset-item>
        
        <a-asset-item id="city" src="/models/building/city.glb"></a-asset-item>
        <a-asset-item id="nature" src="/models/building/Nature.glb"></a-asset-item>
        <a-asset-item id="skyline" src="/models/building/skyline.glb"></a-asset-item>
        <a-asset-item id="bush" src="/models/building/bush.glb"></a-asset-item>
        <a-asset-item id="fountain" src="/models/building/Fountain.glb"></a-asset-item>
        <a-asset-item id="hedge" src="/models/building/Hedge.glb"></a-asset-item>
        <a-asset-item id="planter" src="/models/building/planter.glb"></a-asset-item>
        <a-asset-item id="fence" src="/models/building/fence.glb"></a-asset-item>
        <a-asset-item id="floor_tile" src="/models/building/floor_tile.glb"></a-asset-item>
        <a-asset-item id="tree_assets" src="/models/building/tree_assets.glb"></a-asset-item>

        <a-asset-item id="elevatorModel" src="/models/Elevator.glb"></a-asset-item>

        
        <a-mixin id="voxel"
           geometry="primitive: box; height: 0.5; width: 0.5; depth: 0.5"
           material="shader: standard"
           random-color
           snaps="offset: 0.25 0.25 0.25; snap: 0.5 0.5 0.5"
        ></a-mixin>
    </a-assets>
    `;
}

document.querySelector("#app").innerHTML = `
<div id="loading-screen">
    <div>Loading...</div>
    <div class="progress-bar">
      <div class="progress-bar-fill" id="progress-bar-fill"></div>
    </div>
  </div>
<div id="game-over">You lost!</div>
<div id="key-collected">You have collected the key!</div>
<div id="gun-collected">You have collected the gun!</div>
<div id="targets-destroyed">You have destroyed all targets!</div>
<div id="interact-text">
    <img src="resources/hand_interact.png" alt="Hand Icon" id="hand-icon">
    Press E to interact
</div>

    

<a-scene id="my_scene" loading-screen inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js" physics="gravity: -30">
<!--    light-->
    <a-light type="ambient" color="#d7a865"></a-light>
     <a-light type="directional" color="#ac552f" intensity="1" position="28 7 -1"></a-light>
    <!-- General -->
    
    ${ImportAssets() + GenerateCharacter() + GenerateEnv()}

    <!-- Bulding -->
    ${GenerateWall() + GenerateFloors() + GenerateStairs() + Exterior()}


  
    
    <!-- Items -->
    ${GenerateCamera() + GenerateKeypad() + GenerateGun()}
  
    <!-- Interior -->
    ${InteriorFirstFloor()}


      
    <a-entity target static-body id="t1" class="target" color="red" radius="1" position="-1.547 -0.1 12.8"  geometry="primitive: sphere; radius: 0.2"></a-entity>
    <a-entity target id="t2" static-body class="target" color="blue" radius="1" position="-3.547 -0.1 12.8"  geometry="primitive: sphere; radius: 0.2"></a-entity>


    <a-entity id="elevator" rotation="0 -90 0" position="-5.4 -0.8 -4.47" gltf-model="#elevatorModel" scale="0.5 0.5 0.5" ></a-entity>   
     
</a-scene>
`;

document.addEventListener("game-over", () => {
  document.getElementById("game-over").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("/sounds/background_suspense.mp3");
  audio.loop = true;
  audio.play().catch((e) => {
    console.error("Sound playback failed:", e);
  });
  const targets = document.querySelectorAll(".target");
  window.remainingTargets = targets.length;
  console.log(`Initialized with ${window.remainingTargets} targets`);
  targets.forEach((target) => {
    console.log(target);
  });
  document.addEventListener("portal-start", () => {
    console.log("Starting...");
    const portalElement = document.getElementById("portal");
    console.log(portalElement);
    portalElement.setAttribute("visible", "true"); // Change the visible attribute to true
  });
});

document.addEventListener("allTargetsDestroyed", () => {
  console.log("destroyed");
  const messageElement = document.getElementById("targets-destroyed");
  messageElement.style.display = "block";
  // Generate and add the key to the scene
  const scene = document.querySelector("a-scene");
  const keyEntity = document.createElement("a-entity");
  keyEntity.setAttribute("collectible", "");
  keyEntity.setAttribute("id", "keys");
  keyEntity.setAttribute("gltf-model", "#key");
  keyEntity.setAttribute("position", "0 3 80");
  keyEntity.setAttribute("rotation", "90 0 0");
  keyEntity.setAttribute("material", "color: green");
  keyEntity.setAttribute("static-body", "");
  scene.appendChild(keyEntity);

  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1000);
});
