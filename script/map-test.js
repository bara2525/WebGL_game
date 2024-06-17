import 'aframe-physics-system'

import { SetToStorage } from './localStorage'

/* UI components */
import './modal'
import {bombTimer} from './bombTimer'

/* COMPONENTS */
//import "../components/portal"
import '/components/character'
import '/components/enemy'
import '/components/portal'

/* STYLES */
import '../style.css'

const time = 11 * 60 * 1000;
SetToStorage("GUN", false);
SetToStorage("HP", 100);
SetToStorage("TIME", time);

window.toggleCamera = toggleCamera; // Make toggleCamera globally accessible

const timer = new bombTimer(time);
timer.startTimer();

function toggleCamera() {
    console.log("Toggle Camera");
    if (firstPerson) {
        firstPerson = false;
    } else {
        firstPerson = true;
    }

    const characterEntity = document.getElementById('character');

    if (!characterEntity) {
        console.error('Character entity not found.');
        return;
    }

    const positionAttribute = characterEntity.getAttribute('position');
    const storedPosition = new THREE.Vector3(positionAttribute.x, positionAttribute.y, positionAttribute.z);

    characterEntity.parentNode.removeChild(characterEntity);

    const newCharacterEntity = GenerateCharacter(storedPosition);
    document.querySelector('a-scene').insertAdjacentHTML('beforeend', newCharacterEntity);

    // Now select the newly created entity
    const newEntity = document.getElementById('character');

    // Ensure the entity exists before adding the component
    if (newEntity) {
        // Check if the physics component exists before accessing its properties
        const physicsComponent = newEntity.components['dynamic-body'];
        if (physicsComponent) {
            // Ensure the camera position is set correctly
            const cameraPosition = firstPerson ? '0 5 -1' : '0 4 5';
            const cameraEntity = document.getElementById('camera');
            cameraEntity.setAttribute('position', cameraPosition);
        } else {
            console.error('Physics component not found in the new character entity.');
        }
    } else {
        console.error('New character entity not found.');
    }

}