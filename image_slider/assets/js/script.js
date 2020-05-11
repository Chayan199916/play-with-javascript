
slideIndex = 0;
showSlides(slideIndex);
// setInterval(showSlides, 3000); // for automatic slideshow

function currentSlide(index){
    slideIndex = index;
    showSlides(index);
}

function plusSlides(movement){
    slideIndex += movement;
    showSlides(slideIndex);
}

function showSlides(index){

    // index = slideIndex++; // for automatic slideshow
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    var gallery = document.querySelectorAll(".gallery-view")
    
    slides.forEach(element => {
        element.style.display = "none";
    });

    dots.forEach(element => {
        element.classList.remove("active");
    });

    gallery.forEach(element => {
        element.classList.remove("gallery-view-active");
    });
    
    if(index == slides.length){
        slideIndex = 0;
        index = 0;
    }
    if(index < 0){
        slideIndex = slides.length - 1;
        index = slideIndex;
    }
    slides[index].style.display = "block";
    // console.log(slides[index].clientWidth)
    dots[index].classList.add("active");
    gallery[index].classList.add("gallery-view-active");
}
