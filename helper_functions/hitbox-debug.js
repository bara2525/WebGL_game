AFRAME.registerComponent('hitbox-debug', {
    init: function () {
        // Create a wireframe around the entity
        const geometry = new THREE.WireframeGeometry(this.el.object3DMap.mesh.geometry);
        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
        const wireframe = new THREE.LineSegments(geometry, material);

        // Add the wireframe to the scene
        this.el.object3D.add(wireframe);
    }
});
