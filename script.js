

// let timerDisplay = document.querySelector('.timerDisplay');
// let stopBtn = document.getElementById('stopBtn');
// let startBtn = document.getElementById('startBtn');
// let resetBtn = document.getElementById('resetBtn');
// let lapBtn = document.getElementById('lapBtn');
// const display = document.getElementById('display');
// const lapList = document.getElementById('lapList');

// let msec = 0;
// let secs = 0;
// let mins = 0;

// let timerId = null;

// startBtn.addEventListener('click', function(){
//     if(timerId !== null){
//         clearInterval(timerId);
//     }
//     timerId = setInterval(startTimer, 10);
// });

// stopBtn.addEventListener('click', function(){
//     clearInterval(timerId);
// });

// resetBtn.addEventListener('click', function(){
//     clearInterval(timerId);
//     timerDisplay.innerHTML = `00 : 00 : 00`;
//     msec = secs = mins = 0;
// });
// lapBtn.addEventListener('click', function() {
//     // Increment lap count
//     lapCount++;
//     const currentTime = new Date().toLocaleTimeString();

//             // Create a new list item
//             const lapItem = document.createElement('ul');
//             lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;

//             // Append the new lap item to the lap list
//             lapList.appendChild(lapItem);
// });

// function startTimer(){
//     msec++;
//     if(msec == 100){
//         msec = 0;
//         secs++;
//         if(secs == 60){
//             secs = 0;
//             mins++;
//         }
//     }

//     let msecString = msec < 10 ? `0${msec}` : msec;
//     let secsString = secs < 10 ? `0${secs}` : secs;
//     let minsString = mins < 10 ? `0${mins}` : mins;
    

//     timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

// }



const timerDisplay = document.querySelector('.timerDisplay');
        const lapList = document.getElementById('lapList');
        
        let msec = 0;
        let secs = 0;
        let mins = 0;
        let timerId = null;
        let lapCount = 0;
        let running = false;
        
        document.getElementById('startBtn').addEventListener('click', function() {
            if (!running) {
                running = true;
                timerId = setInterval(startTimer, 10);
            }
        });
        
        document.getElementById('stopBtn').addEventListener('click', function() {
            clearInterval(timerId);
            running = false;
        });
        
        document.getElementById('resetBtn').addEventListener('click', function() {
            clearInterval(timerId);
            running = false;
            timerDisplay.innerHTML = `00 : 00 : 00`;
            msec = secs = mins = 0;
            lapCount = 0;
            lapList.innerHTML = ""; // Clear lap list
        });
        
        document.getElementById('lapBtn').addEventListener('click', recordLap);
        
        function startTimer() {
            msec++;
            if (msec == 100) {
                msec = 0;
                secs++;
                if (secs == 60) {
                    secs = 0;
                    mins++;
                }
            }
        
            let msecString = msec < 10 ? `0${msec}` : msec;
            let secsString = secs < 10 ? `0${secs}` : secs;
            let minsString = mins < 10 ? `0${mins}` : mins;
        
            timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
        }
        
        function recordLap() {
            if (running) {
                lapCount++;
                const lapTime = `${mins < 10 ? '0' + mins : mins} : ${secs < 10 ? '0' + secs : secs} : ${msec < 10 ? '0' + msec : msec}`;
                const lapItem = document.createElement("li");
                lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
                lapList.appendChild(lapItem);
            }
        }
