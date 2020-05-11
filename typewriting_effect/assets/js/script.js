texts = ['full stack developer', 'programmer', 'content writer'];
var counter = 0;
var currentText = "";
var currentIndex = 0;
var outputText = ""

function type(){

    currentText = texts[counter];
    outputText += currentText.slice(currentIndex, ++currentIndex);
    target = document.querySelector(".typing-text")
    target.innerText = outputText;

    if(currentIndex === currentText.length){
        counter++;
        currentIndex = 0;
        outputText = "";
    }
    if(counter === texts.length){
        counter = 0;
    }

}

setInterval(type, 200);