import "aframe-physics-system";

import "/components/character";
import "/components/enterenceMarker";
import "/components/wall";
import "/components/house-door";
import "/components/house-window";
import "./general";
import "/components/enemy";

import "/components/portal";
import "/components/loading-screen";
import "/components/gun";
import "/components/collectible";
import "/components/Items";
import "/components/enemy"

import "./modal";
import "./HealthBar";

import "../style.css";
import { SethealthBarVal } from "./HealthBar";

import { bombTimer } from "./bombTimer";
import { GenerateDoors } from "/components/door";
import "/script/panel"

import { GetFromStorage } from "./localStorage";
const hasKey = GetFromStorage("KEY");
document.getElementById("character").setAttribute("hasKey", hasKey);

// init of UI panel
SethealthBarVal();
const timer = new bombTimer();
timer.getTimeFromStorage();
timer.startTimer();
