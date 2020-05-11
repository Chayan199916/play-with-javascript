function scrollAppear(){
    var introText = document.querySelector(".intro-text");
    var introPos = introText.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    console.log(introPos, screenPos);

    if(introPos < screenPos){
        introText.classList.add("intro-appear");
    }
}

window.addEventListener("scroll", scrollAppear);