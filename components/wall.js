AFRAME.registerComponent("wall", {
  init: function (height, width) {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "box",
      depth: 0.1,
      height: height,
      width: width,
    });
    el.setAttribute("material", {
      src: "resources/wall1.jpg",
      repeat: "1 1",
    });
  },
});

AFRAME.registerComponent("wall2", {
  init: function (height, width) {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "box",
      depth: 0.1,
      height: height,
      width: width,
    });
    el.setAttribute("material", {
      src: "resources/wall.jpg",
      repeat: "1 1",
    });
  },
});

AFRAME.registerComponent("wall3", {
  init: function (height, width) {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "box",
      depth: 0.1,
      height: height,
      width: width,
    });
    el.setAttribute("material", {
      src: "resources/wall2.jpg",
      repeat: "1 1",
    });
  },
});

export function GenerateWall() {
  return `
        <a-box wall position="-8 3 -110" scale="7 7 7" rotation="0 90 0"  gltf-model="#walls" static-body></a-box>
    <!-- <a-box wall position="8 3 0" scale="7 7 7" rotation="0 90 0"  gltf-model="#walls" static-body></a-box> -->

        <!-- walls 1st floor -->
        <a-box id="wall-1" wall position="0 7.3 -70" rotation="0 0 0" scale="70 14.6 1" static-body></a-box>
        
        <a-box id="wall-3" wall position="21 7.3 -25.5" rotation="0 0 0" scale="30 14.6 1" ></a-box>
        <a-box id="wall-3.5" wall position="6 7.3 -21.5" rotation="0 90 0" scale="7.8 14.6 1" ></a-box>
        
        <a-box id="wall-4" wall position="-21 7.3 -25.5" rotation="0 0 0" scale="29.6 14.6 1" static-body></a-box>
        <a-box id="wall-4.5" wall position="-6 7.3 -27.3" rotation="0 90 0" scale="19 14.6 1" static-body></a-box>
        
        <a-box id="wall-5" wall position="-35 7.3 -48" rotation="0 -90 0" scale="45 14.6 1" static-body></a-box>
        <a-box id="wall-6" wall position="35 7.3 -48" rotation="0 -90 0" scale="45 14.6 1" static-body></a-box>
        <!-- walls 2nd floor -->
        <a-box id="wall-2" wall position="0 21.9 -25.5" rotation="0 0 0" scale="70 14.6 1" ></a-box>
        <a-box id="wall-7" wall position="0 21.9 -70" rotation="0 0 0" scale="70 14.6 1" static-body></a-box>
        <a-box id="wall-8" wall position="-35 21.9 -48" rotation="0 -90 0" scale="45 14.6 1" static-body></a-box>
        <a-box id="wall-9" wall position="35 21.9 -48" rotation="0 -90 0" scale="45 14.6 1" static-body></a-box>
        
        <!-- walls 3rd floor -->
        <a-box id="wall-10" wall position="0 36.8 -25.5" rotation="0 0 0" scale="70 14.6 1" ></a-box>
        <a-box id="wall-11" wall position="0 36.8 -70" rotation="0 0 0" scale="70 14.6 1" static-body></a-box>
        <a-box id="wall-12" wall position="-35 36.8 -48" rotation="0 -90 0" scale="45 14.6 1" static-body></a-box>
        <a-box id="wall-13" wall position="35 36.8 -48" rotation="0 -90 0" scale="45 14.6 1" static-body></a-box>
        
        
        <a-box id="floor-above-door" wall position="0 14.5 -25.8" rotation="90 0 90" scale="15.5 12.4 1" static-body></a-box>
   `;
}

export function GenerateFloors() {
  return `
    <a-box static-body="friction: 0;" position="0 0 0" rotation="-90 0 0" width="200" height="200" depth="0.2" color="#928c86" halfExtents="0.1 0.1 0.1" visible="false" ></a-box>
    <a-box static-body="friction: 0;" position="0 0.1 -50" rotation="-90 0 0" scale="70 70 1" depth="0.2"  material="src: url(resources/floor3.jpg); repeat: 10 10;" ></a-box>
    
    <!--2. floor -->
    <a-box static-body="friction: 0;" position="0 15 -48" rotation="-90 0 0" scale="69 45 1" depth="0.2" color="#efeae4"></a-box>
<!--    <a-box position="0 0 -47" scale="50 50 50" rotation="0 0 0"   gltf-model="#building" static-body></a-box>-->
    <a-box position="0 0 -47" scale="50 50 50" rotation="0 0 0" gltf-model="#buildingNoDoor" ></a-box>


    `;
}
