function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var distance = targetPos - startPos;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        // console.log(currentTime);
        let timeElapsed = currentTime - startTime;
        let run  = ease(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    requestAnimationFrame(animation);
}



let section1 = document.querySelector(".section1");
section1.addEventListener("click", function(){
    smoothScroll(".section2", 2000);
});

let section2 = document.querySelector(".section2");
section2.addEventListener("click", function(){
    smoothScroll(".section1", 3000);
});