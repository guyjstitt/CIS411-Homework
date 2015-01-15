var buttons = document.querySelectorAll('.calcBtn');

for(i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		if(this.id == "equals") {
			Calc.Input.value = eval(Calc.Input.value);
		} else {
			Calc.Input.value += this.value;
		}
	});
}

