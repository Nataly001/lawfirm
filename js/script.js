const card = document.getElementsByClassName("card");
const slider = document.getElementById("slider");
const buttonRight = document.getElementById("slide-right");
const buttonLeft = document.getElementById("slide-left");


if (buttonLeft) { 
  buttonLeft.addEventListener("click", () =>{
  slider.scrollLeft -= slider.clientWidth;
});
}
if (buttonLeft) {
  buttonRight.addEventListener("click", () =>{
  slider.scrollLeft += slider.clientWidth/3;
});
}
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

///alert(maxScrollLeft);

//Autoplay slider
function autoPlay(){
  if (slider.scrollLeft > (maxScrollLeft - 1)){
    slider.scrollLeft -= maxScrollLeft;
  }
  else{
    slider.scrollLeft += 1;
  }
}


let play = setInterval(autoPlay, 50);

//Pause the slider on hover
for (let i = 0; i < card.length; i++){
  card[i].addEventListener("mouseover", () => {
    clearInterval(play);
  })
  card[i].addEventListener("mouseout", () => {
    return play = setInterval(autoPlay, 50);
  })
}


//MAP
