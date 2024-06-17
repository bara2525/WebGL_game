import 'aframe-physics-system'

import "/components/enemy"
import "/components/character"
import "/components/enterenceMarker"
import '/components/PoliceSiren'
import "/components/portal"
import "/components/loading-screen";
import "/components/gun"
import "/components/collectible"

import { SetToStorage } from './localStorage'
import './modal'
import './HealthBar'
import {bombTimer} from './bombTimer'
import './panel'
import '../style.css'

//for getting name of model animation
document.querySelector('#tank').addEventListener('model-loaded', function(e) {
    const model = e.detail.model;
    const animations = model.animations;
    console.log('Available animations:', animations.map(a => a.name));
});

SetToStorage("HP", 100);
SetToStorage("GUN", false);
SetToStorage("KEY", false);
SetToStorage("TOOL", false);
const timer = new bombTimer();
timer.setTimeFromStorage();
timer.startTimer();