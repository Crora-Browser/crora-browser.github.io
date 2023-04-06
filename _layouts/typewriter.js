var i = 0;
var speed = 70; // speed of typing (in milliseconds)

function typeWriter() {
    var txt = 'Experience the Internet without boundaries with Crora Browser'
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function () {
    typeWriter();
}