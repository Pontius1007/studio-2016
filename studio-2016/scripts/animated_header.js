/*
FILE NAME: scripts/animated_header.js
WRITTEN BY: Anders Brevik
WHEN: November 2016
PURPOSE: To create a fade effect on the header when the user scrolls.
*/

window.onscroll = function(event) { // Runs when the user scrolls.
    var yPos = pageYOffset;  // Stores the current yPosition on the page
    var sweetSpot = 12.6;   // A yOffsett that looks and feels right
    var header = document.getElementById("headerID"); // Gets the correct header element.

    header.style.opacity = 1-(yPos-sweetSpot)/sweetSpot; // Starts lowering the opacity when the yPosition is at the sweetSpot, is fully
                                                        // opaque when y is at 2 * sweetSpot

}
