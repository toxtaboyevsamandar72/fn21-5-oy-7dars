import words from "./data.js";
let randomWord = document.getElementById("random_word");
let randomWordinput = document.getElementById("random_word_input");
randomWordinput.focus()
let userscore = document.getElementById("user_score")
let usertime = document.getElementById("user_time")
let changelevel = document.getElementById("change_level")
let globalWord;
let score = 0;
let time = 10;
let level = `easy`
function randomWordGenerator() {
  let randomNumber = Math.trunc(Math.random() * words.length);
  randomWord.textContent = words[randomNumber];
  globalWord = words[randomNumber];
}
randomWordGenerator();

randomWordinput.addEventListener("input", () => {
  if (randomWordinput.value == globalWord) {
    randomWordGenerator();
    randomWordinput.value = "";
    score++;
    userscore.textContent = score;
    new Audio("./music/light-switch-156813.mp3").play();
    if (level = `easy`) {
      time +=5;
      new Audio("./music/ping-82822.mp3").play();
    } else  if (level = `medium`) {
      time +=3;
      new Audio("./music/click-menu-app-147357.mp3").play();
    } else  if (level = `hard`) {
      time +=2;
      new Audio("./music/click-button-app-147358.mp3").play();
    }
  }
  new Audio("./music/click-button-140881.mp3").play();
});

// setInterval()

let timer = setInterval(() => {
  time--;
  usertime.textContent = `${time}s`

  if (time>=7) {
    usertime.parentElement.style.color = "green"
  } else if (time<7 && time>=4) {
    usertime.parentElement.style.color = "gold"
    document.body.style = `box-shadow: 8px -1px 27px 37px rgba(30,4,20,0.35) inset;
    -webkit-box-shadow: 8px -1px 27px 37px rgba(30,4,20,0.35) inset;
    -moz-box-shadow: 8px -1px 27px 37px rgba(30,4,20,0.35) inset;`
  } else if (time<4) {
    usertime.parentElement.style.color = "red"
    document.body.style = `box-shadow: 8px -1px 27px 37px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: 8px -1px 27px 37px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 8px -1px 27px 37px rgba(0,0,0,0.75) inset;`
  }
  if (time == 0) {
   clearInterval(timer) 
  }
}, 1000);

changelevel.addEventListener("change",()=>{
  level = changelevel.value;
  new Audio("./music/tap-notification-180637.mp3").play();
})