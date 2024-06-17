AFRAME.registerComponent('entrance-marker', {
    schema: {
      target: { type: 'selector' }
    },
    init: function () {
      this.el.addEventListener('collide', this.onCollide.bind(this));
    },
    onCollide: function (evt) {
      if (evt.detail.body.el === this.data.target) {
        // Přesuňte postavu dovnitř domu
        const character = this.data.target;
        character.setAttribute('position', '0 0 0');  // Upravte pozici podle potřeby
        console.log('Character entered the house');
      }
    }
  });