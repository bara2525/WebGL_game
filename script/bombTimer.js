import { GetFromStorage, SetToStorage } from "./localStorage";
export class bombTimer 
{
    constructor(time = 11 * 60 * 1000, debug = false) 
    {
        this.timerRunning = false;
        this.elapsedTime = time;
        this.intervalId = null;
        this.debug = debug;
        if(this.debug) console.log("timer created", time);
    }

    getTimeFromStorage()
    {
        this.elapsedTime = GetFromStorage("TIME");
    }

    setTimeFromStorage() 
    {
        SetToStorage("TIME", this.elapsedTime);
    }

    startTimer() 
    {
        if(this.debug) console.log("start bomb timer");
        if (!this.timerRunning) 
        {
            this.intervalId = setInterval(() => this.updateTimer(), 1000); // Use arrow function
            this.timerRunning = true;
        }
    }

    pauseTimer() 
    {
        if(this.debug) console.log("pause bomb timer");
        clearInterval(this.intervalId);
        this.timerRunning = false;
    }

    stopTimer() 
    {
        if(this.debug) console.log("stop bomb timer");
        clearInterval(this.intervalId); // this.intervalId instead of intervalId
        this.timerRunning = false;
        this.elapsedTime = 0;
        this.updateTimerDisplay();
    }

    updateTimer() 
    {
        if(this.debug) console.log("update timer");
        this.elapsedTime -= 1000;
        if (this.elapsedTime <= 0) 
        {
            clearInterval(this.intervalId); // this.intervalId instead of a function
            this.timerRunning = false;
            this.elapsedTime = 0;
            this.updateTimerDisplay();
            window.location.href =  "ending-screen.html?outcome=lose";
        } 
        else 
        {
            this.updateTimerDisplay();
        }
    }

    formatTime(time) 
    {
        return time < 10 ? "0" + time : time;
    }

    updateTimerDisplay() 
    {
        if(this.debug) console.log("update bomb timer display");
        const hours = Math.floor(this.elapsedTime / 3600000);
        const minutes = Math.floor((this.elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((this.elapsedTime % 60000) / 1000);

        document.getElementById("hours").innerText = this.formatTime(hours);
        document.getElementById("minutes").innerText = this.formatTime(minutes);
        document.getElementById("seconds").innerText = this.formatTime(seconds);
    }
}


export function SaveTime()
{
    var h = document.getElementById("hours").innerText;
    var m = document.getElementById("minutes").innerText;
    var s = document.getElementById("seconds").innerText; 
    SetToStorage("TIME", h * 1000 * 60 * 60 + m * 1000 * 60 + s * 1000);
}