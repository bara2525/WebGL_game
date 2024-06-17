// background video and main audio
const audio = document.getElementById("audioBackground");
const videobackground = document.getElementById("videobackground");

// all buttons and links
const buttons = document.querySelectorAll(".functionalButtons");

// mute/unmute icon button
const nosound = document.getElementById("nosound");
const sound = document.getElementById("sound");

// click and hover sounds
const audioHover = document.getElementById("audioHover");
const audioClick = document.getElementById("audioClick");

// set volume of background music
audio.volume = 0.5;

// toggle mute button icon
sound.addEventListener("click", () => {
    sound.style.display = "none";
    nosound.style.display = "block";

    if (audio.muted === false) audio.muted = true;
    else audio.muted = false;
});

// toggle unmute button icon
nosound.addEventListener("click", () => {
    nosound.style.display = "none";
    sound.style.display = "block";

    if (audio.muted === true) audio.muted = false;
    else audio.muted = true;
});

// add beep sound and hover sound to all buttons and links
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", clickSound);
    buttons[i].addEventListener("mouseenter", hoverSound);
}

// functions that play hover/click sounds
function clickSound() {audioClick.play();}
function hoverSound() {audioHover.play();}

// Start audio on mouseover on body, once
document.querySelector(".screen").addEventListener("click", () => {
    audio.play();
}, { once: true });

// show game controls
document.getElementById("controls").addEventListener("click", () => 
{
    document.getElementById("controls-body").style.display = "block";
    document.getElementById("links").style.display = "none";
});

// show about game
document.getElementById("about").addEventListener("click", () => 
{
    document.getElementById("about-body").style.display = "block";
    document.getElementById("links").style.display = "none";
});    

// back button to main menu
const backButtons = document.querySelectorAll("#backButton")
backButtons.forEach(element => {
    element.addEventListener("click", () => 
    {
        document.getElementById("controls-body").style.display = "none";
        document.getElementById("about-body").style.display = "none";
        document.getElementById("links").style.display = "block";
    });
});