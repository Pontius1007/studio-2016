window.onscroll = function(event) {
    var yPos = pageYOffset;
    var sweetSpot = 12.6;
    var header = document.getElementById("headerID");

    header.style.opacity = 1-(yPos-sweetSpot)/sweetSpot;

}
