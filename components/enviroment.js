export function GenerateEnv() {
  return `
    <a-sky src="./resources/DomeSky.jpg" radius="500"></a-sky>
<!--    <a-box -->
<!--        static-body="friction: 0;"-->
<!--        position="0 0 0" -->
<!--        rotation="-90 0 0" -->
<!--        scale="1000 1000 1"-->
<!--        material="src: url(resources/outdoor-ground.jpg);-->
<!--        normal-map: #floor-NRM;-->
<!--        normal-texture-repeat: 50 50;"></a-box>-->
<a-box id="floor" shadow="receive: true" static-body="friction: 0;; sphereRadius: NaN" position="0 0 -25" rotation="-90 0 0" scale="500 500 1" color="#bbaaaa" depth="0.2"  material="src: url(resources/outdoor-ground.jpg); repeat: 10 10; transparent: true; opacity: 1.0;" ></a-box>

        <!-- trees -->
        <a-entity gltf-model="#trees" position="-50 0 32" scale="30 30 30" rotation="0 61 0" material="color: green" static-body></a-entity>
        <a-entity gltf-model="#trees" position="51 0 32" scale="30 30 30" rotation="0 115 0" material="color: green" static-body></a-entity>
        <a-entity gltf-model="#trees" position="-58 0 97" scale="30 30 30" rotation="0 0 0" material="color: green" static-body></a-entity>
        <a-entity gltf-model="#trees" position="-38 0 149" scale="30 30 30" rotation="0 0 0" material="color: green" static-body></a-entity>
        <a-entity gltf-model="#trees" position="21 0 146" scale="30 30 30" rotation="0 0 0" material="color: green" static-body></a-entity>
        <a-entity gltf-model="#trees" position="55 0 88" scale="30 30 30" rotation="0 0 0" material="color: green" static-body></a-entity>
        
        
        
       
        


        <!-- bulding -->
        <a-entity gltf-model="#bulding" position="0 0 -50" scale="40 40 50" rotation="0 0 0" material="color: green"></a-entity> 
    `;
}
