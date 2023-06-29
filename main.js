const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");


// Time Values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Leading Zeos variables

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//sET iNTERVAL AND timer sTATUS

let timerInterval = null;
let timerStatus = "Stopped";


// Stop Watch Function
function stopWatchFunction() {
    seconds++;

    if(seconds / 60 ===1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 ===1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }


    
    let displayer = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`
    let displayTimer = document.getElementById("timer").innerText = displayer;
}

// window.setInterval(stopWatchFunction, 1000)

// status Function
startStopButton.addEventListener("click", statusFunction);

function statusFunction() {

    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatchFunction, 1000);
        document.getElementById("startStopButton").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        timerInterval = window.clearInterval(timerInterval);
        document.getElementById("startStopButton").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
};


// reset Function
resetButton.addEventListener("click", resetTimerFunction);

function resetTimerFunction() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").innerHTML = "00:00:00";
}

