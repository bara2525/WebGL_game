AFRAME.registerComponent('house-window', {
    schema: {
        scale: { type: 'vec3', default: { x: 3.5, y: 3, z: 1 } }
    },

    init: function () {
        const el = this.el;
        const data = this.data;

        el.setAttribute('geometry', {
            primitive: 'box',
            depth: 0.1
        });

        el.setAttribute('material', {
            color: '#FFFFFF'  // Optional: Set a color if you want a base material color
        });

        el.setAttribute('scale', `${data.scale.x} ${data.scale.y} ${data.scale.z}`);
        el.setAttribute('gltf-model', 'url(models/HouseInteriorPack/Window Small.glb)');
    }
});