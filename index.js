let minute = 0;
let second = 0;
let centiSecond = 0;
const minuteP = document.getElementById("minute")
const secondP = document.getElementById("second")
const centiSecondP = document.getElementById("centi-second");
let listMin = document.getElementById("list-minute")
let listSec = document.getElementById("list-second")
let listCenti = document.getElementById("list-centi")
let pause = false



let interval;



function start(){
    console.log("called");
    if(!pause){
        interval = setInterval(() => {
            if (centiSecond === 100) {
                centiSecond = 0;
                second++;
            }
            if (second === 60) {
                second = 0;
                minute++;
            }
            centiSecondP.innerHTML = centiSecond;
            secondP.innerHTML = second;
            minuteP.innerHTML = minute;
            centiSecond++
        }, 10)
    }else{
        if (interval) {
            console.log("cleared");
            clearInterval(interval);
        }
    }
    pause = !pause
   
    
}

function reset(){
   if(interval){
       clearInterval(interval);
   }
    minute = 0;
    second =0;
    centiSecond =0;
    centiSecondP.innerHTML = centiSecond;
    secondP.innerHTML = second;
    minuteP.innerHTML = minute;
    pause = false
}


function leap(){
    listMin.innerHTML = minute;
    listSec.innerHTML = second;
    listCenti.innerHTML = centiSecond;
}