AFRAME.registerComponent('policesiren', 
{
    schema: {
        type: {type: 'bool', default: false},
        debug: {type: 'bool', default: false},
      },
    init: function () 
    {
        if(this.data.debug)  console.log("sirens toggle on");
        this.blue = this.el.childNodes[1];
        this.red = this.el.childNodes[3];
        this.isBlueVisible = true;
        this.ChangeColor();
    },
    ChangeColor()
    {
        setInterval(() => {
            if (this.isBlueVisible) {
                this.blue.setAttribute('visible', 'false');
                this.red.setAttribute('visible', 'true');
            } else {
                this.blue.setAttribute('visible', 'true');
                this.red.setAttribute('visible', 'false');
            }
            this.isBlueVisible = !this.isBlueVisible;
        }, 500); // 500 ms pauza mezi přepínáním
    }
});