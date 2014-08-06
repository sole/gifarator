var Animated_GIF = require('animated_gif');
var ui;

function init() {
	ui = new (require('./UI'))();
	document.body.appendChild(ui.domElement);

	ui.gifItButton.addEventListener('click', generateGIF);
}

function generateGIF() {
	var images = ui.getImageFrames();
	var ag = new Animated_GIF();

}

init();
