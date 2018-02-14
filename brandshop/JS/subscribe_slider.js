var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("subscribe_slider_animation");
	var lines = document.getElementsByClassName("line");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (var i = 0; i < lines.length; i++) {
		lines[i].className = lines[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	lines[slideIndex-1].className += " active";
}

showSlidesAuto();
function showSlidesAuto() {
	var i;
	var slides = document.getElementsByClassName("subscribe_slider_animation");
	var lines = document.getElementsByClassName("line");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (var i = 0; i < lines.length; i++) {
		lines[i].className = lines[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	lines[slideIndex-1].className += " active";
	setTimeout(showSlidesAuto, 5000);
}