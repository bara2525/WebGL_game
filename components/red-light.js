AFRAME.registerComponent('red-light', {
    init: function() {

        // Red block representing light
        const lightFixture = document.createElement('a-box');
        lightFixture.setAttribute('width', '0.5');
        lightFixture.setAttribute('height', '0.2');
        lightFixture.setAttribute('depth', '0.5');
        lightFixture.setAttribute('color', 'red');


    }
});
