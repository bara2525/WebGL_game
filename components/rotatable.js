AFRAME.registerComponent('rotatable', {
    schema: {
        speed: { type: 'number', default: 1 } // Speed of the rotation
    },
    init: function() {
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;


        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);


        this.el.sceneEl.addEventListener('loaded', () => {
            this.attachEventListeners();
        });
    },
    attachEventListeners: function() {

        const canvas = this.el.sceneEl.canvas;

        canvas.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
    },
    removeEventListeners: function() {
        const canvas = this.el.sceneEl && this.el.sceneEl.canvas;
        if (canvas) {
            canvas.removeEventListener('mousedown', this.onMouseDown);
            window.removeEventListener('mouseup', this.onMouseUp);
            window.removeEventListener('mousemove', this.onMouseMove);
        }
    },
    onMouseDown: function(e) {
        this.ifMouseDown = true;
        this.x_cord = e.clientX;
        this.y_cord = e.clientY;
    },
    onMouseUp: function() {
        this.ifMouseDown = false;
    },
    onMouseMove: function(e) {
        if (this.ifMouseDown) {
            const deltaX = e.clientX - this.x_cord;
            let rotation = this.el.getAttribute('rotation');
            rotation.y += deltaX * this.data.speed;
            this.el.setAttribute('rotation', rotation);
            this.x_cord = e.clientX;
            this.y_cord = e.clientY;
        }
    },
    remove: function() {
        this.removeEventListeners();
    }
});
