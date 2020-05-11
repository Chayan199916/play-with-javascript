// console.log('running');
let colors = [];
function generateBody(){
    Array.from(squares).forEach(function (element, index) {
        min_range = 0;
        max_range = 255;
        red = Math.floor(Math.random() * (max_range - min_range) + min_range);
        green = Math.floor(Math.random() * (max_range - min_range) + min_range);
        blue = Math.floor(Math.random() * (max_range - min_range) + min_range);
        bg_color = `rgb(${red}, ${green}, ${blue})`;
        color_obj = { 'red': red, 'green': green, 'blue': blue };
        colors.push(color_obj);
        element.style.backgroundColor = bg_color;
        element.setAttribute("id", index);
        element.setAttribute("onclick", `change_head(${index})`);
    });
}
function generateHeadingColor(x){
    span_color_index = Math.floor(Math.random() * (x - 0) + 0);
    // console.log(span_color_index);
    span_color = `rgb(${colors[span_color_index].red}, ${colors[span_color_index].green}, ${colors[span_color_index].blue})`;
    //console.log(span_color, typeof span_color);
    span.innerText = span_color;
}
span = document.getElementsByTagName("span")[0];
squares = document.getElementsByClassName('square');
generateBody();
generateHeadingColor(colors.length);
// console.log(colors);

heading = document.getElementsByTagName("h1")[0];
messageTxt = document.getElementById("message");
function change_head(index) {
    parti_square = document.getElementById(index);
    color_ele = parti_square.style.backgroundColor;
    if (color_ele == span_color) {
        heading.style.backgroundColor = color_ele;
        Array.from(squares).forEach(function (element) {
            element.style.display = "block";
            element.style.backgroundColor = color_ele;
            messageTxt.innerText = "correct !";
            btn.innerText = "Play Again?";
        })
    }
    else {
        parti_square.style.backgroundColor = "#232323";
        messageTxt.innerText = "Try again !";
    }
    // console.log(color_ele);
}

btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    heading.style.backgroundColor = "rgb(7, 146, 146)";
    messageTxt.innerText = "";
    btn.innerText = "New Colors"
    // console.log(colors.length);
    if (colors.length == 3) {
        jobForThree();
    }
    else {
        jobForSix();
    }
});

btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn1.addEventListener("click", function () {
    messageTxt.innerText = "";
    jobForThree();
});

btn2.addEventListener("click", function () {
    messageTxt.innerText = "";
    jobForSix();
});
function jobForThree(){
    colors = [];
    btn1.classList.add("selected");
    btn2.classList.remove("selected");
    cont = document.getElementById("container");
    cont.innerHTML = `<div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>`;
    squares = document.getElementsByClassName('square');
    generateBody();
    span = document.getElementsByTagName("span")[0];
    generateHeadingColor(colors.length);
}
function jobForSix(){
    colors = [];
    btn2.classList.add("selected");
    btn1.classList.remove("selected");
    cont = document.getElementById("container");
    cont.innerHTML = `<div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>`;
    squares = document.getElementsByClassName('square');
    generateBody();
    span = document.getElementsByTagName("span")[0];
    generateHeadingColor(colors.length);
}