
// Wire module
AFRAME.registerComponent('wires', {
    init: function() {
        const COLORS = ['red', 'blue', 'yellow', 'green']; // Example wire colors
        const DISTANCE_BETWEEN = 0.05; // Distance between wires

        // Create multiple wires
        COLORS.forEach((color, index) => {
            let wire = document.createElement('a-cylinder');
            wire.setAttribute('color', color);
            wire.setAttribute('height', '0.1');
            wire.setAttribute('radius', '0.02');
            wire.setAttribute('position', {x: index * DISTANCE_BETWEEN, y: 0, z: 0});

            // Append the wire to the module entity
            this.el.appendChild(wire);

            // When the wire is clicked, change its color to grey
            wire.addEventListener('click', function(evt) {
                wire.setAttribute('color', 'grey');
                // ...additional logic for "cutting" the wire...
                console.log(color + ' wire cut');
            });
        });
    }
});

// Button module
AFRAME.registerComponent('button', {
    init: function() {
        // Create a box to represent the button
        let button = document.createElement('a-box');
        button.setAttribute('color', 'green');
        button.setAttribute('depth', '0.1');
        button.setAttribute('height', '0.2');
        button.setAttribute('width', '0.2');
        button.setAttribute('position', '0 0 0');


        this.el.appendChild(button);

        // When the button is clicked, change its color to red, then back to green
        button.addEventListener('click', () => {
            button.setAttribute('color', 'red');
            setTimeout(() => {
                button.setAttribute('color', 'green');
            }, 1000); // Reset color after 1 second
        });
    }
});


AFRAME.registerComponent('screen', {
    init: function() {
        let text = document.createElement('a-text');
        text.setAttribute('value', 'DEFUSE CODE: 1234');
        text.setAttribute('color', 'blue');
        text.setAttribute('align', 'center');
        text.setAttribute('width', 0.8);
        text.setAttribute('position', '0 0 0.05');


        let background = document.createElement('a-plane');
        background.setAttribute('color', '#222');
        background.setAttribute('height', '0.3');
        background.setAttribute('width', '0.5');
        background.setAttribute('position', '0 0 0.01');

        this.el.appendChild(background);
        this.el.appendChild(text);
    }
});

AFRAME.registerComponent('keypad', {
    init: function() {
        const buttonValues = ['1', '2', '3', '4'];
        const buttonSize = 0.1;
        const spacing = 0.15;

        buttonValues.forEach((value, index) => {
            let button = document.createElement('a-box');
            button.setAttribute('color', 'lightgray');
            button.setAttribute('depth', buttonSize);
            button.setAttribute('height', buttonSize);
            button.setAttribute('width', buttonSize);

            // Position buttons in a grid
            let posX = (index % 2) * spacing - (spacing / 2);
            let posY = -Math.floor(index / 2) * spacing + (spacing / 2);
            button.setAttribute('position', `${posX} ${posY} 0`);

            // Set button text
            let text = document.createElement('a-text');
            text.setAttribute('value', value);
            text.setAttribute('color', 'black');
            text.setAttribute('align', 'center');
            text.setAttribute('width', buttonSize+1);
            text.setAttribute('position', `0 0 ${buttonSize / 2 + 0.01}`);


            button.appendChild(text);


            button.addEventListener('click', () => {
                console.log(`Button ${value} pressed`);
                // Perform action related to button press

            });

            this.el.appendChild(button);
        });
    }
});

