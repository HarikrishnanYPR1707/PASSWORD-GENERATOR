const lengthSlider = document.querySelector(".pass-length input");

const updateSlider = () => {
	document.querySelector(".details span").innerText = lengthSlider.value;
}

updateSlider();

lengthSlider.addEventListener("input", updateSlider);

