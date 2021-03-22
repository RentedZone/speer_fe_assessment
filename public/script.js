let slideIndex = Math.floor(Math.random() * 12);
let timeoutCounter = 10000;

function carousel() {
    let i;
    let x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length-1) {slideIndex = 0}
    x[slideIndex].style.display = "block";
    updateDots();
    setTimeout(carousel, timeoutCounter); // Change image every timeoutCounter ms
}

function next() {
    let x = document.getElementsByClassName("slides");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > x.length-1) {slideIndex = 0}
    x[slideIndex].style.display = "block";
    timeoutCounter = 10000;
    updateDots();
}

function prev() {
    let x = document.getElementsByClassName("slides");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex--;
    if (slideIndex < 0) {slideIndex = x.length-1}
    x[slideIndex].style.display = "block";
    timeoutCounter = 10000;
    updateDots();
}

function updateDots() {
    let x = document.getElementsByClassName("dot");
    for(let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }

    x[slideIndex].style.backgroundColor = "rgba(255, 255, 255, 1)";
}

// Functions
carousel();

$(document).ready(function() {
    $('.burger-wrapper').click(function() {
        $(this).toggleClass('open');
    });

    $('.next').click(function() {
        next();
    });

    $('.prev').click(function() {
        prev();
    });
});

