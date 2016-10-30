document.addEventListener("DOMContentLoaded", function(event) {
	var elements = {
		header: document.getElementById("header"),
		navbar: document.getElementById("navbar"),
		footer: document.getElementById("footer"),
	}
	if (elements.header) {
		var h_div = document.createElement("div");
		h_div.className = "header";
		h_div.innerHTML = "<div class=\"header-p\"><a class=\"header-link\" href=\"../index.html\">NORTHERN WAVE</a></div><div class=\"social\"><!-- Social icons --><a href=\"https://www.facebook.com\"><img src=\"../../images/facebook.png\"></a><a href=\"https://twitter.com\"><img src=\"../../images/twitter.png\"></a><a href=\"https://www.youtube.com\"><img src=\"../../images/youtube.png\"></a></div>\";";
		elements.header.appendChild(h_div);	
	}
	if (elements.navbar) {
		var n_div = document.createElement("div");
		n_div.className = "nav-bar";

		n_div.innerHTML = "<a href=\"../index/information.html\" class=\"tab\">Information</a><div class=\"dropdown\"><button onclick=\"myFunction()\" class=\"dropbtn\">Studio</button><div id=\"myDropdown\" class=\"dropdown-content\"><a href=\"../studio.html\">Studio</a><a href=\"../studio/equipment.html\">Equipment</a></div></div><a href=\"../who-are-we.html\" class=\"tab\">Who are we</a><a href=\"../index.html\" class=\"tab img\"></a><a href=\"../producers.html\" class=\"tab\">Producers</a><a href=\"../lessons.html\" class=\"tab\">Lessons</a><a href=\"../prices.html\" class=\"tab\">Price</a>";
		elements.navbar.appendChild(n_div);	
	}
	if (elements.footer) {
		var f_div = document.createElement("div");
		f_div.className = "footer";
		f_div.innerHTML = "<p>Contact us | Northern Wave</p>";
		elements.footer.appendChild(f_div);	
	}
})