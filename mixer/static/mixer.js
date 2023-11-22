var red = 52;
var green = 71;
var blue = 106; 

var color_cache = document.querySelector(".color-cache");
var primary_color = document.querySelector("#primary-color");
var screenshot = document.querySelector(".screenshot");
var screen = document.querySelector(".mixer");
var redMarker = document.querySelector("#red");
var greenMarker = document.querySelector("#green");
var blueMarker = document.querySelector("#blue");

function cache() {
	var color = document.createElement("div");
	color.setAttribute("class", "color");
	color.style.backgroundColor = primary_color.textContent;
	color_cache.append(color);
}


// update screenshot
document.querySelector(".color-cache").addEventListener("click", function() {
	let size = this.children.length;
	let colors = this.children;

	for(var i = 0; i < size; ++i) {
		colors[i].onclick = function() {
			redMarker.textContent = red;
			greenMarker.textContent = green;
			blueMarker.textContent = blue;
			screen.style.backgroundColor = this.style.backgroundColor;
			screenshot.style.backgroundColor = this.style.backgroundColor;
		}
	}
})

//red slider
document.querySelector("#red-slider").addEventListener("change", function() {
	red = this.value;
	green = document.querySelector("#green-slider").value;
	blue = document.querySelector("#blue-slider").value;

	redMarker.textContent = red;
	cache();
	document.querySelector(".screenshot").style.backgroundColor = `rgb(${this.value},${green},${blue})`;
})

//green slider
document.querySelector("#green-slider").addEventListener("change", function() {
	green = this.value;
	red = document.querySelector("#red-slider").value;
	blue = document.querySelector("#blue-slider").value;

	greenMarker.textContent = green;
	cache();
	document.querySelector(".screenshot").style.backgroundColor = `rgb(${red},${green},${blue})`;
})

//blue slider
document.querySelector("#blue-slider").addEventListener("change", function() {
	blue = this.value;
	red = document.querySelector("#red-slider").value;
	green = document.querySelector("#green-slider").value;

	blueMarker.textContent = blue;
	cache();
	document.querySelector(".screenshot").style.backgroundColor = `rgb(${red},${green},${blue})`;
})
