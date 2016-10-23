/*
FILE NAME: scripts/pagerarea_game.js
WRITTEN BY: Sondre Steinsland Hegdal
WHEN: November 2015
PURPOSE: switch between the games the team currently has players on
*/

document.addEventListener("DOMContentLoaded", function(event){
	//initializa all elements
	var elements = {
		page: document.getElementById("players"),
		player1: document.getElementById("player1"),
		player2: document.getElementById("player2"),
		player3: document.getElementById("player3"),
		player4: document.getElementById("player4"),
		sc2_b: document.getElementById("sc2_b"),
		hs_b: document.getElementById("hs_b"),
	}

	//delete all elements from the page
	while (elements.page.hasChildNodes()){
		elements.page.removeChild(elements.page.lastChild);
	}
	//insert the elements of the first button
	elements.page.appendChild(elements.player1);
	elements.page.appendChild(elements.player2);
	
	//insert the wanted elements when the button is clicked
	elements.sc2_b.addEventListener("click", function(event){
		while (elements.page.hasChildNodes()){
			elements.page.removeChild(elements.page.lastChild);
		}
	
		elements.page.appendChild(elements.player1);
		elements.page.appendChild(elements.player2);
	});
	//insert the wanted elements when the button is clicked
	elements.hs_b.addEventListener("click", function(event){
		while (elements.page.hasChildNodes()){
			elements.page.removeChild(elements.page.lastChild);
		}
		elements.page.appendChild(elements.player3);
		elements.page.appendChild(elements.player4);
	});

})