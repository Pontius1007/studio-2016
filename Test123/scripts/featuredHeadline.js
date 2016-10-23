/*
FILE NAME: featuredHeadline.js
WRITTEN BY: Martin Dammerud CONTRIBUTOR: Espen Dammen
WHEN: November 2015
PURPOSE: Display display a slideshow of images and headlines on the front page.
*/
window.onload = function () {
	/*List of Featured Headline Id's*/
	var FH0 = document.getElementById("FH0");
	var FH1 = document.getElementById("FH1");
	var FH2 = document.getElementById("FH2");
	var FHList = [FH0, FH1, FH2];

	var featuredImage = document.getElementById("featuredImage");
	/*List of Featured Images*/
	var FImageList = ["shop-featured-image.jpg", "hearthstone.jpg", "Legacy_Void.png"];
	/*Stores current list index*/
	var headlineNumber = 0;
	
	/*Hides all but the appropriate Featured Headline <div>,
	and changes background image, both according to headline Number*/
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
	
	// Changes the Headline Number up or down by 1 acording to input number.
	function changeHeadline(number) {
		console.log(number);
		headlineNumber += number;
		/* If Headline Number exceeds list ranges:
		changes Headline Number to match other end of the lists.*/
		if (headlineNumber > FHList.length - 1) {
			headlineNumber = 0;
		} else if (headlineNumber < 0) {
			headlineNumber = FHList.length - 1;
		};
		// Displayes Featured Headline with updated Headline Number.
		showHeadline(headlineNumber);
		// returns updated Headline number.
		return headlineNumber;
	};
	
	/*Flips to next featured headline every 5th second.
	Timer is reset whenever the Featured Headline is Changes manually*/
	var timer = setInterval(function() {headlineNumber = changeHeadline(1) }, 5000);
	function resetTimer() {
		clearInterval(timer)
		timer = setInterval(function() {headlineNumber = changeHeadline(1) }, 5000);
	};
	
	//Finds buttons for manual Headline changes.
	document.getElementById("nextFeatured").addEventListener("click", function() {
		headlineNumber = changeHeadline(1);
		resetTimer()});
	document.getElementById("previousFeatured").addEventListener("click", function() {
		headlineNumber = changeHeadline(-1);
		resetTimer()});
	
	// Displays the first Featured headline uppon page load.
	showHeadline(headlineNumber);
};