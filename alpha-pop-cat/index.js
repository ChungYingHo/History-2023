// get DOM element
const img = document.querySelector("img")
const score = document.querySelector(".score")
const reset = document.querySelector(".reset")

// event-driven
img.addEventListener("mousedown", ()=>{
    img.src = './images/open.png'
    soundPlay()
});

img.addEventListener("mouseup", ()=>{
    img.src = './images/close.png'
    return score.textContent = Number(score.textContent) + 1
});

reset.addEventListener("click", (event)=>{
    let target = event.target;
    if (target.matches(".reset")) {
        score.textContent = 0;
    }
});

// function
// 播放音效
function soundPlay() {
  const audio = new Audio(
    "https://www.myinstants.com/media/sounds/pop-cat-original-meme_3ObdYkj.mp3"
  )
  audio.play()
}

