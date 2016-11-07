/*
FILE NAME: scripts/header_footer.js
WRITTEN BY: Sebastian Torgersen, Embrik Einang, Anders Breivik, Alfred Sollie Rønning
WHEN: November 2016
PURPOSE: Inserts header, navbar and footer to all pages.
*/

/* Gets the divs with ids where the html is gonna be added */
/* Elements folder is doing the same thing as elements for elements one div under pages. */
document.addEventListener("DOMContentLoaded", function(event) {
	var elements = {
		header: document.getElementById("header"),
		navbar: document.getElementById("navbar"),
		footer: document.getElementById("footer"),
	}
	var elementsfolder = {
		headerf: document.getElementById("headerf"),
		navbarf: document.getElementById("navbarf"),
		footerf: document.getElementById("footerf"),
	}

/* checks if the divs exist in the html, and adding the hml in.  */
	if (elements.header) {
		var h_div = document.createElement("div");
		h_div.className = "header";
        h_div.id ="headerID";
		h_div.innerHTML = "<div class=\"header-p\"><a class=\"header-link\" href=\"index.html\">NORTHERN WAVE</a></div><div class=\"social\"><!-- Social icons --><a href=\"https://www.facebook.com\"><img src=\"../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../images/youtube.png\"></a></div>\";";
		elements.header.appendChild(h_div);	
	}
	if (elements.navbar) {
		var n_div = document.createElement("div");
		n_div.className = "nav-bar";
		n_div.innerHTML = "<a href=\"index/information.html\" class=\"tab\">Information</a><div class=\"dropdown\"><button onclick=\"myFunction()\" class=\"dropbtn\"><a href=\"studio.html\">Studio</a></button><div id=\"dropdown\" class=\"dropdown-content\"><a href=\"studio/equipment.html\">Equipment</a></div></div><a href=\"who-are-we.html\" class=\"tab\">Who are we</a><a href=\"index.html\" class=\"tab img\"></a><div class=\"dropdown\"><button onclick=\"myFunction()\" class=\"dropbtn\"><a href=\"producers.html\">Producers</a></button><div id=\"dropdown\" class=\"dropdown-content\"><a href=\"producers/PerKristian.html\">Per Kristian</a><a href=\"producers/Espen.html\">Espen</a><a href=\"producers/Steffen.html\">Steffen</a></div></div><a href=\"lessons.html\" class=\"tab\">Lessons</a><a href=\"prices.html\" class=\"tab\">Price</a>";
		elements.navbar.appendChild(n_div);
	}
	if (elements.footer) {
		var f_div = document.createElement("div");
		f_div.className = "footer";
		f_div.innerHTML = "<p><a class=\"header-link\" href=\"mailto:northernwave@gmail.com\">Contact us<a> | Northern Wave</p>";
		elements.footer.appendChild(f_div);	
	}
	if (elementsfolder.headerf) {
		var h_div = document.createElement("div");
		h_div.className = "header";
        h_div.id ="headerID";
		h_div.innerHTML = "<div class=\"header-p\"><a class=\"header-link\" href=\"../index.html\">NORTHERN WAVE</a></div><div class=\"social\"><!-- Social icons --><a href=\"https://www.facebook.com\"><img src=\"../../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../../images/youtube.png\"></a></div>\";";
		elementsfolder.headerf.appendChild(h_div);	
	}
	if (elementsfolder.navbarf) {
		var n_div = document.createElement("div");
		n_div.className = "nav-bar";

		n_div.innerHTML = "<a href=\"../index/information.html\" class=\"tab\">Information</a><div class=\"dropdown\"><button onclick=\"myFunction()\" class=\"dropbtn\"><a href=\"../studio.html\">Studio</a></button><div id=\"dropdown\" class=\"dropdown-content\"><a href=\"../studio/equipment.html\">Equipment</a></div></div><a href=\"../who-are-we.html\" class=\"tab\">Who are we</a><a href=\"../index.html\" class=\"tab img\"></a><div class=\"dropdown\"><button onclick=\"myFunction()\" class=\"dropbtn\"><a href=\"../producers.html\">Producers</a></button><div id=\"dropdown\" class=\"dropdown-content\"><a href=\"../producers/PerKristian.html\">Per Kristian</a><a href=\"../producers/Espen.html\">Espen</a><a href=\"../producers/Steffen.html\">Steffen</a></div></div><a href=\"../lessons.html\" class=\"tab\">Lessons</a><a href=\"../prices.html\" class=\"tab\">Price</a>";
		elementsfolder.navbarf.appendChild(n_div);	
	}
	if (elementsfolder.footerf) {
		var f_div = document.createElement("div");
		f_div.className = "footer";
		f_div.innerHTML = "<p><a class=\"header-link\" href=\"mailto:northernwave@gmail.com\">Contact us<a> | Northern Wave</p>";
		elementsfolder.footerf.appendChild(f_div);	
	}
})