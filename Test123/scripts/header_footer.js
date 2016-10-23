/*
FILE NAME: scripts/header_footer.js
WRITTEN BY: Sondre Steinsland Hegdal
WHEN: November 2015
PURPOSE: generate the header/footer for all pages except index.html. Index.html uses this footer, but has a custom header.
*/

document.addEventListener("DOMContentLoaded", function(event){
	//get all elements from the page
	var elements = {
		header: document.getElementById("page_header"),
		footer: document.getElementById("page_footer"),
		player_header: document.getElementById("player_page_header"),
		player_footer: document.getElementById("player_page_footer")
	}
	//Header for all main pages, except index.html
	if (elements.header){
		//create a div to put the html into
		var h_div = document.createElement("div");
		//classes for the div
		h_div.className = "flex container space-between";
		//insert html for the header

		h_div.innerHTML = "<a href=\"../pages/index.html\"><img id=\"logo\" src=\"../images/logo.png\"/></a><div class=\"\"><div class=\"social\"><a href=\"https://www.facebook.com\"><img src=\"../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../images/youtube.png\"></a></div><nav><ul><li><a href=\"index.html\">NEWS</a></li><li><a href=\"about.html\">ABOUT</a></li><li><a href=\"teams.html\">TEAM</a><ul class=\"dropdown\"><li><a href=\"players/player1.html\">PONTIUS</a></li><li><a href=\"players/player2.html\">ARANEAE</a></li><li><a href=\"players/player3.html\">DAMZ</a></li><li><a href=\"players/player4.html\">VALOSS</a></li></ul></li><li><a href=\"sponsors.html\">SPONSORS</a></li><li><a href=\"shop.html\">SHOP</a><ul class=\"dropdown\"><li><a href=\"shop.html\">BROWSE</a></li><li><a href=\"form.html\">ORDER</a></li></ul></li><li><a href=\"contact.html\">CONTACT</a></li></ul></nav></div>";


		//add the header to the header-element
		elements.header.appendChild(h_div);	
	}

	//Footer for all main pages
	if (elements.footer){
		//create a div to put the html into
		var f_div = document.createElement("div");
		//classes for the div
		f_div.className = "flex-footer container vertical-center";
		//insert html for the footer
		f_div.innerHTML = "<div class=\"col-3\" style=\"text-align: left;\">Copyright 2015|All Rights Reserved</div><div class=\"col-3\" style=\"text-align: center;\"><img src=\"../images/small_logo.png\"></div><div class=\"social col-3\"><a href=\"https://www.facebook.com\"><img src=\"../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../images/youtube.png\"></a></div>";
		//add the footer to the footer-element
		elements.footer.appendChild(f_div);
		}
	//Header for player pages
	if (elements.player_header !== null){
		//create a div to put the html into
		var p_h_div = document.createElement("div");
		//classes for the div
		p_h_div.className = "flex container space-between";
		//insert html for the header

		p_h_div.innerHTML = "<a href=\"../../pages/index.html\"><img id=\"logo\" src=\"../../images/logo.png\"/></a><div class=\"\"><div class=\"social\"><a href=\"https://www.facebook.com\"><img src=\"../../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../../images/youtube.png\"></a></div><nav><ul><li><a href=\"../index.html\">NEWS</a></li><li><a href=\"../about.html\">ABOUT</a></li><li><a href=\"../teams.html\">TEAM</a><ul class=\"dropdown\"><li><a href=\"player1.html\">PONTIUS</a></li><li><a href=\"player2.html\">ARANEAE</a></li><li><a href=\"player3.html\">DAMZ</a></li><li><a href=\"player4.html\">VALOSS</a></li></ul></li><li><a href=\"../sponsors.html\">SPONSORS</a></li><li><a href=\"../shop.html\">SHOP</a><ul class=\"dropdown\"><li><a href=\"../shop.html\">BROWSE</a></li><li><a href=\"../form.html\">ORDER</a></li></ul></li><li><a href=\"../contact.html\">CONTACT</a></li></ul></nav></div>";

		//p_h_div.innerHTML = "<a href=\"../../pages/index.html\"><img id=\"logo\" src=\"../../images/logo.png\"/></a><div class=\"\"><div class=\"social\"><a href=\"https://www.facebook.com\"><img src=\"../../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../../images/youtube.png\"></a></div><nav><ul><li><a href=\"../index.html\">NEWS</a></li><li><a href=\"../about.html\">ABOUT</a><ul class=\"dropdown\"><li><a href=\"#\">History</a></li><li><a href=\"#\">Achievements</a></li><li><a href=\"#\">Goals</a></li></ul></li><li><a href=\"../teams.html\">TEAM</a><ul class=\"dropdown\"><li><a href=\"#\">Starcraft 2</a></li><li><a href=\"#\">Hearthstone</a></li></ul></li><li><a href=\"../sponsors.html\">SPONSORS</a></li><li><a href=\"../shop.html\">SHOP</a></li><li><a href=\"../contact.html\">CONTACT</a></li></ul></nav></div>";

		//add the header to the header-element
		elements.player_header.appendChild(p_h_div);
	}

	//Footer for all player pages
	if (elements.player_footer){
		//create a div to put the html into
		var p_f_div = document.createElement("div");
		//classes for the div
		p_f_div.className = "flex-footer container vertical-center";
		//insert html for the footer
		p_f_div.innerHTML = "<div class=\"col-3\" style=\"text-align: left;\">Copyright 2015|All Rights Reserved</div><div class=\"col-3\" style=\"text-align: center;\"><img src=\"../../images/small_logo.png\"></div><div class=\"social col-3\"><a href=\"https://www.facebook.com\"><img src=\"../../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../../images/youtube.png\"></a></div>";
		//add the footer to the footer-element
		elements.player_footer.appendChild(p_f_div);
	}
})