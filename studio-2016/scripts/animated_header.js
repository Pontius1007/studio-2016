function yScroll(){
    var pagetop = document.getElementById("headerID");
    var yPos = window.pageYOffset;
    console.log(yPos);
    if(yPos > 4.5){
        pagetop.style.visibility = "hidden";
    }
    else{
        pagetop.style.visibility = "visible";
    }
}