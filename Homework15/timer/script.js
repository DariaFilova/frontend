const time = document.querySelector('.time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 11;
let interval = null;

setTime();


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);


function timer() {
    seconds--;

    setTime();

    if(seconds == 0) {
        reset();
    }
}

function setTime() {
    //Formats for time
    let hrs = Math.floor(seconds / 3600); // 60 * 60
    let mins = Math.floor((seconds - hrs * 3600) / 60);
    let secs = seconds % 60;

    
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    time.innerText = `${hrs}:${mins}:${secs}`;
}


function start() {
    if (interval) {
        return
    }
    
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time.innerText = '00:00:00';
}