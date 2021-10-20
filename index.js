// require('./bootstrap');

function scrolldiv() {
    var about = document.getElementById("about-me");
    about.scrollIntoView({behavior: "smooth", inline: "nearest"});
}

var downArrow = document.getElementById("down-arrow");
downArrow.onclick = function(){
    scrolldiv();
}