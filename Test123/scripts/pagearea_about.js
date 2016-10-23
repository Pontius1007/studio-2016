/*
FILE NAME: scripts/pagerarea_about.js
WRITTEN BY: Sondre Steinsland Hegdal
WHEN: November 2015
PURPOSE: load the different content on the about.html page, when a button has been pressed.
*/

//event for loading the page.
document.addEventListener("DOMContentLoaded", function(event){
	//initializa all elements
	var elements = {
		page: document.getElementById("about_page"),
		hist: document.getElementById("history"),
		achi: document.getElementById("achievements"),
		goal: document.getElementById("goals"),
		hist_b: document.getElementById("history_b"),
		achi_b: document.getElementById("achievements_b"),
		goal_b: document.getElementById("goals_b")
	}

	//delete all elements from the page
	while (elements.page.hasChildNodes()){
		elements.page.removeChild(elements.page.lastChild);
	}
	//insert the elements of the first button
	elements.page.appendChild(elements.hist);


	//insert the wanted elements when the button is clicked
	elements.hist_b.addEventListener("click", function(event){
		while (elements.page.hasChildNodes()){
			elements.page.removeChild(elements.page.lastChild);
		}
		elements.page.appendChild(elements.hist);
	});
	//insert the wanted elements when the button is clicked
	elements.achi_b.addEventListener("click", function(event){
		while (elements.page.hasChildNodes()){
			elements.page.removeChild(elements.page.lastChild);
		}
		elements.page.appendChild(elements.achi);
	});
	//insert the wanted elements when the button is clicked
	elements.goal_b.addEventListener("click", function(event){
		while (elements.page.hasChildNodes()){
			elements.page.removeChild(elements.page.lastChild);
		}
		elements.page.appendChild(elements.goal);
	});
})