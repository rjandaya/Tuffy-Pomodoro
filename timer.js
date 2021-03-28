function countdown(minutes, seconds) {
    var secs = seconds;
    var mins = minutes;
    var alarm = new Audio('alarm.mp3');
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var counter = document.getElementById('timer');
        counter.innerHTML = "00:00";
        // console.log(mins);
        // console.log(secs);
        if (mins > 0) {
            // +1:00
            if (secs < 0) {
                // +1:05
                // but how about when a number goes from 5:00 -> 4:59
                var current_minutes = mins - 1;
            } else if (mins == 1 && secs < 1) {
                current_minutes = mins - 1;
            } else {
                // +1:60i m
                current_minutes = mins;
            }
        } else {
            // 00:60
            current_minutes = mins;
        }
        
        if (secs == 60 || secs == -1) {
            counter.innerHTML = (mins + 1).toString() + ":00";
        } else {
            counter.innerHTML = current_minutes.toString() + ":" + (secs < 10 ? "0" : "") + String(secs);
        }
        secs--;
        console.log(secs+1);
        if (secs >= 0) {
            timer = setTimeout(tick, 1000);
        } else {
            if (mins > 0) {
                // Reset seconds for new minute
                countdown(mins - 1, 60);           
            } else {
                alarm.play();
            }
        }
    }
    setTimeout(tick(), 1000);
}

function backgroundBreakSwap() {
    document.body.style.backgroundColor = "rgb(187, 216, 255)";
    
}

function backgroundWorkSwap() {
    document.body.style.backgroundColor = "rgb(218, 255, 227)";
    
}

async function submitHandler() {
    var counter = document.getElementById('timer');
    var techniques = document.querySelector('input[name="technique"]:checked').value;
    var state = document.getElementById('state');
    console.log('technique:', techniques);
    
    if (techniques == 'pomodoro') {
        state.innerHTML = "Get back to work!";
        for (i = 0; i < 4; i++) {
            console.log(i, 'entering for loop');
            clearTimeout(timer); 

            state.innerHTML = "Get back to work!";
            countdown(24, 60);
            
            // Take 5min break after 25min
            await sleep(1501000);
            backgroundBreakSwap();
            console.log('beginning break');
            state.innerHTML = "Take a break!";
            countdown(4, 60);

            // Delay iteration for 30min 
            await sleep(1807000);       
            
            state.innerHTML = "Get back to work!";    
            backgroundWorkSwap();
        }

        // Take 30min break after 4 iterations
        await sleep(7208000);
        backgroundBreakSwap();
        console.log('beginning break');
        state.innerHTML = "Take a break!";
        countdown(29, 60);

    } else if (techniques == 'animedoro') {
        clearTimeout(timer); 
        
        backgroundWorkSwap();
        state.innerHTML = "Get back to work!";
        
        countdown(59, 60);

        // Take 20min break after 60min
        await sleep(3621000);

        backgroundBreakSwap();
        console.log('beginning break');
        state.innerHTML = "Take a break!";
        countdown(19, 60);

    } else if (techniques == 'twenty') {

        clearTimeout(timer); 

        backgroundWorkSwap();
        state.innerHTML = "Get back to work!";
        countdown(19, 60);

        // Take 20s break after 20min
        await sleep(1211000);

        backgroundBreakSwap();
        console.log('beginning break');
        state.innerHTML = "Take a break!";
        countdown(0, 20);

    } else if (techniques == 'custom') {
        var customvalue = document.getElementById('custom').value;
        console.log('customvalue:', customvalue);
        
        countdown(customvalue - 1, 60);
        
    }
}

function resetTimer() {
    clearTimeout(timer);
    state.innerHTML = "Please Select A Study Technique";
    document.body.style.backgroundColor = "rgb(218, 255, 227)";
    var counter = document.getElementById('timer');
    counter.innerHTML = "00:00";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  