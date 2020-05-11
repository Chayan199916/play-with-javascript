var balls = document.getElementsByClassName("ball");
        
document.addEventListener('mousemove', function (event) {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    // console.log(event.clientX, event.clientY);
    for (var i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        //  balls[i].style.transform() = "translate(-"+x+",-"+y+")";
    }
});