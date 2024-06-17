AFRAME.registerComponent('house-door', {
    schema: {
        height: { type: 'number', default: 2 },
        width: { type: 'number', default: 1 }
    },

    init: function () {
        const el = this.el;
        const data = this.data;

        el.setAttribute('geometry', {
            primitive: 'box',
            depth: 0.1,
            height: data.height,
            width: data.width
        });

        el.setAttribute('material', {
            src: 'models/HouseInteriorPack/Door.glb',
            repeat: '1 1'
        });

        el.setAttribute('gltf-model', 'url(models/HouseInteriorPack/Door.glb)');
    }
});