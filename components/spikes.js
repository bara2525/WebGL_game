AFRAME.registerComponent('spikes', {
    schema: {
        src: {type: 'string', default: '/models/spikes-animated.glb'}
    },
    init: function () {
        const el = this.el;
        const loader = new THREE.GLTFLoader();

        this.el.addEventListener('collide-with-character', () => {
                console.log('Spikes collided with character');})

        loader.load(this.data.src, (gltf) => {
            this.model = gltf.scene;
            el.setObject3D('mesh', this.model);

            // Set up the animation mixer and play the animation
            this.mixer = new THREE.AnimationMixer(this.model);
            this.mixer.clipAction(gltf.animations[0]).play();
        });
    },
    tick: function (time, timeDelta) {
        if (this.mixer) {
            this.mixer.update(timeDelta / 1000);
        }
    },
    remove: function () {
        if (this.model) {
            this.el.removeObject3D('mesh');
        }
    }
});

export function GenerateSpikes()
{
    // return `
    // <a-box spikes  position="10 -4 -10" scale="2 2 2" rotation="0 0 0" static-body></a-box> 
    // <a-box spikes  position="14 -4 -10" scale="2 2 2" rotation="0 0 0" static-body></a-box>
    // <a-box spikes  position="18 -4 -10" scale="2 2 2" rotation="0 0 0" static-body></a-box> 

    // <a-box spikes  position="10 -4 -15" scale="2 2 2" rotation="0 0 0"  static-body></a-box>
    // <a-box spikes  position="14 -4 -15" scale="2 2 2" rotation="0 0 0"  static-body></a-box>
    // <a-box spikes  position="18 -4 -15" scale="2 2 2" rotation="0 0 0"  static-body></a-box>
    // `
}

export function GeneratePlatforms()
{
    // return `
    // <a-box  position="10 0 -10" depth="0.1" height="3" width="10" rotation="90 0 0" static-body material="color: #444444;"></a-box>
    // <a-box  position="20 0 -15" depth="0.1" height="3" width="10" rotation="90 0 0" static-body material="color: #444444;"></a-box>
    // <a-box  position="35 0 -15" depth="0.1" height="10" width="10" rotation="90 0 0" static-body material="color: #444444;"></a-box>
    // `
}