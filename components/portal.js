import "../styles/portal.css"
import { SaveHealthBarVal } from "../script/HealthBar";
import { SaveTime } from "../script/bombTimer";
//import { getCurrentTimeFromDOM } from "../script/bombTimer";

AFRAME.registerComponent("portal", {
    schema: {
      destination: {type: 'string', default: "#"},
      subject: {type: 'string', default: "character"},
      debug: {type: 'bool', default: false},
    },
  
    init() 
    {
      this.characterModel = this.el;
      if(this.data.debug) console.log("schemas:", this.data.destination, this.data.subject);
      //this.el.setAttribute("animation", "property: color; type: color; to: #0000ff; dur: 500; easing: linear; dir: alternate; loop: true");
      this.subject = document.getElementById(this.data.subject);
      this.teleporting = false;
    },

    update: function () {},
    tock: function () 
    {
        let portalPosition = this.el.object3D.position;
        let distance = portalPosition.distanceTo(this.subject.object3D.position);
        if(this.data.debug) console.log("Position to portal:", distance);

        if (distance < 4 && !this.teleporting)
        {
          this.teleporting = true;
          if(this.data.debug) console.log("teleporting");
          this.Redirect();
        }
    },
    Redirect(){
      if (this.teleporting) 
        {
          SaveHealthBarVal();
          SaveTime();
          window.location.href =  this.data.destination;
        }
    },
    remove: function () {},
    pause: function () {},
    play: function () {}
});