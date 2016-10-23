document.addEventListener("DOMContentLoaded", function(event){
	var elements = {
		page: document.getElementById("about_page"),
		hist: document.getElementById("history"),
		achi: document.getElementById("achievements"),
		goal: document.getElementById("goals"),
		hist_b: document.getElementById("history_b"),
		achi_b: document.getElementById("achievements_b"),
		goal_b: document.getElementById("goals_b")
	}

	elements.page.innerHTML = "";
	elements.page.appendChild(elements.hist);

	elements.hist_b.addEventListener("click", function(event){
		elements.page.innerHTML = "";
		elements.page.appendChild(elements.hist);
	});
	elements.achi_b.addEventListener("click", function(event){
		elements.page.innerHTML = "";
		elements.page.appendChild(elements.achi);
	});
	elements.goal_b.addEventListener("click", function(event){
		elements.page.innerHTML = "";
		elements.page.appendChild(elements.goal);
	});
})