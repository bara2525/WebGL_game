AFRAME.registerComponent('custom-hitbox', {
    init: function () {
        // Get reference to the entity
        var entity = this.el;

        // Wait for the model to load
        entity.addEventListener('model-loaded', function () {
            // Get the Three.js object of the model
            var object3D = entity.getObject3D('mesh');

            // Compute bounding box of the object
            var bbox = new THREE.Box3().setFromObject(object3D);

            // Calculate dimensions of the bounding box
            var size = new THREE.Vector3();
            bbox.getSize(size);

            // Set the size of the hitbox to match the character model
            entity.setAttribute('geometry', {
                primitive: 'box',
                width: size.x,
                height: size.y,
                depth: size.z
            });

            // Position the hitbox relative to the entity
            entity.setAttribute('position', {
                x: bbox.min.x + size.x / 2,
                y: bbox.min.y + size.y / 2,
                z: bbox.min.z + size.z / 2
            });
        });
    }
});