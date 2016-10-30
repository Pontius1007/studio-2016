/*
FILE NAME: slideshow.js
WRITTEN BY: Alfred Rønning
WHEN: November 2016
PURPOSE: Display display a slideshow of images on the front page.
*/
window.onload = function () {
	/*List of image Id's*/
	var FH0 = document.getElementById("FH0");
	var FH1 = document.getElementById("FH1");
	var FH2 = document.getElementById("FH2");
	var FHList = [FH0, FH1, FH2];

	var featuredImage = document.getElementById("featuredImage");
	/*List of Images*/
	var FImageList = ["tynnebilder6.jpg", "tynnebilder2.jpg", "tynnebilder4.jpg"];
	/*Stores current list index*/
	var headlineNumber = 0;
	
	/*Hides all but the appropriate text,
	and changes background image, both according to Number*/
	function showHeadline(number) {
		for (var i = 0; i <= FHList.length-1; i += 1) {
			if (i === number) {
				FHList[i].style.display="inherit";
				featuredImage.style.backgroundImage="url(../images/" + FImageList[i] + ")";
			} else {
				FHList[i].style.display="none";
			};
		};
	};
	
	// Changes the image Number up or down by 1 acording to input number.
	function changeHeadline(number) {
		console.log(number);
		headlineNumber += number;
		/* If image Number exceeds list ranges:
		changes image Number to match other end of the lists.*/
		if (headlineNumber > FHList.length - 1) {
			headlineNumber = 0;
		} else if (headlineNumber < 0) {
			headlineNumber = FHList.length - 1;
		};
		// Displayes image with updated Headline Number.
		showHeadline(headlineNumber);
		// returns updated image number.
		return headlineNumber;
	};
	
	/*Flips to next image every 8th second.
	Timer is reset whenever the image is Changed manually*/
	var timer = setInterval(function() {headlineNumber = changeHeadline(1) }, 8000);
	function resetTimer() {
		clearInterval(timer)
		timer = setInterval(function() {headlineNumber = changeHeadline(1) }, 8000);
	};
	
	//Finds buttons for manual image changes.
	document.getElementById("nextFeatured").addEventListener("click", function() {
		headlineNumber = changeHeadline(1);
		resetTimer()});
	document.getElementById("previousFeatured").addEventListener("click", function() {
		headlineNumber = changeHeadline(-1);
		resetTimer()});
	
	// Displays the first image uppon page load.
	showHeadline(headlineNumber);
};