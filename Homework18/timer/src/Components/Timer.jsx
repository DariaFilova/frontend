import React, { useState } from 'react';
import './Timer.scss'

const Timer = () => {

    const [initial] = useState(234);
    const [seconds, setSeconds] = useState(initial);
    const [interv, setInterv] = useState(null);
    let startTime = '';

    const timer = () => {
        setSeconds(prev => prev - 1);
        setTime();

        if (seconds === 0) {
            reset();
        }
    }

    const setTime = () => {
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds - hrs * 3600) / 60);
        let secs = seconds % 60;

        if (secs < 10) secs = '0' + secs;
        if (mins < 10) mins = '0' + mins;
        if (hrs < 10) hrs = '0' + hrs;

        startTime = `${hrs}:${mins}:${secs}`;
    }

    const start = () => {
        if (interv) {
            return
        }
        setInterv(setInterval(timer, 1000))
    }

    const stop = () => {
        clearInterval(interv);
        setInterv(null)

    }

    const reset = () => {
        stop();
        setSeconds(initial);
        setTime();
    }

    setTime();

    return (
        <div>
            <div className="watch">
                <div className="time">{startTime}</div>

                <div className="controls">
                    <button onClick={start}>Start</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Timer;