const timeValue = document.getElementById("inputTimervalue")
const display = document.querySelector(".display")

let remainingTime = 0;
let timer;
let isPaused = false;

const startTimer = () =>{
     if(timer){
          clearInterval(timer);
          remainingTime =0;
     }
     remainingTime = remainingTime || timeValue.value
     timer = setInterval(()=>{
          updateTime();
     },1000)
}

const updateTime = () =>{
     if(remainingTime > 0){
          remainingTime--;
          displayTime();
     }else{
          clearInterval(timer)
     }
}


const displayTime =()=>{
     // const <remainingTim></remainingTim>e = timeValue.value;
     const hours = Math.floor(remainingTime / 3600);
     const minutes =Math.floor((remainingTime % 3600) / 60); 
     const seconds = remainingTime % 60
     // console.log(hours,minutes,seconds);
     display.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

const pauseTimer = () => {
     clearInterval(timer)
 };
 
 
const resetTimer = () =>{
     remainingTime =0;
     clearInterval(timer)
     startTimer();
}
export {startTimer ,pauseTimer, resetTimer}
