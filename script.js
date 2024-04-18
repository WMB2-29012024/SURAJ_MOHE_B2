import { startTimer,pauseTimer , resetTimer } from "./timer.js";

const startBtn = document.getElementById("start")
const  pauseBtn= document.getElementById("pause")
const  resetBtn= document.getElementById("reset")

startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",pauseTimer)
resetBtn.addEventListener("click",resetTimer)