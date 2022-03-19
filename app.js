window.addEventListener("load", init);

function ID(element) {
    return document.getElementById(element);
}

var kepek = [{
    kepEleresiUtvonal: "img/crashbandicoot1.jpg",
    kepCim: "Crash Bandicoot 4 - It's About Time",
    kepAr: 8000
}, {
    kepEleresiUtvonal: "img/crashbandicoot2.jpg",
    kepCim: "Crash Bandicoot - N. Sane Trilogy",
    kepAr: 9000
}, {
    kepEleresiUtvonal: "img/retro1.jpg",
    kepCim: "Retrowave Sunset",
    kepAr: 11000
}, {
    kepEleresiUtvonal: "img/retro2.jpg",
    kepCim: "Zup F! - Retrowave Planet",
    kepAr: 12000
}]

var n = 0, i = 0;

function display(i) {
    ID("main-image").src = kepek[i].kepEleresiUtvonal;
    ID("main-image").alt = kepek[i].kepCim;
    ID("title-image").innerHTML = kepek[i].kepCim;
}

function leftButton() {
    n--;
    if(n < 0) n = kepek.length - 1;
    display(n);
}

function rightButton() {
    n++;
    if(n >= kepek.length) n = 0;
    display(n);
}

function smallImages() {
    /* ID("small-image-1").src = kepek[0].kepEleresiUtvonal;
    ID("small-image-1").alt = kepek[0].kepCim;
    ID("small-image-2").src = kepek[1].kepEleresiUtvonal;
    ID("small-image-2").alt = kepek[1].kepCim;
    ID("small-image-3").src = kepek[2].kepEleresiUtvonal;
    ID("small-image-3").alt = kepek[2].kepCim;
    ID("small-image-4").src = kepek[3].kepEleresiUtvonal;
    ID("small-image-4").alt = kepek[3].kepCim; */
    for(i = 0; i < 4; i++) {
        ID("small-image-" + (i + 1)).src = kepek[i].kepEleresiUtvonal;
        ID("small-image-" + (i + 1)).alt = kepek[i].kepCim;
    }
}

function displaySmallImage1() {
    let s = kepek.length - 4;
    display(s);
}

function displaySmallImage2() {
    let s = kepek.length - 3;
    display(s);
}

function displaySmallImage3() {
    let s = kepek.length - 2;
    display(s);
}

function displaySmallImage4() {
    let s = kepek.length - 1;
    display(s);
}

// Main
function init() {
    ID("title").innerHTML = "Képgaléria";

    ID("main-image").src = kepek[0].kepEleresiUtvonal;

    ID("left").addEventListener("click", leftButton);
    ID("right").addEventListener("click", rightButton);
    
    smallImages();
    ID("small-image-1").addEventListener("click", displaySmallImage1);
    ID("small-image-2").addEventListener("click", displaySmallImage2);
    ID("small-image-3").addEventListener("click", displaySmallImage3);
    ID("small-image-4").addEventListener("click", displaySmallImage4);

    ID("footer").innerHTML = "@ Piller András";
}