var sliders  = document.querySelectorAll('.app-produtcs-header-slider li');

document.querySelector('.app-produtcs-header-slider li:nth-child(1)').classList.add("slider-active");
var current  = 0;
var total    = sliders.length - 1;
window.setInterval(function(){
	var index =  current ? current - 1 : total;
	sliders[index].className  = '';
	sliders[current].className  = 'slider-active';
	current = current >= total ? 0 : current+1; 	
}, 3000);

