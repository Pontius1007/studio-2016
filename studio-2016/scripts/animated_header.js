window.onscroll = function(event) {
    var yPos = pageYOffset;
    var header = document.getElementById("headerID");
    console.log(header); //14
    if(yPos < 12.6){
        header.style.visibility = "visible";
        header.style.opacity = 1-(yPos/12.6);
        console.log("Setting visibility to true")
    }
    else{
        header.style.visibility = "hidden"; 
        console.log("Setting visibility to false");
    }
}
