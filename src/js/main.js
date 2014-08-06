var ui;

function init() {
	ui = new (require('./UI'))();
	document.body.appendChild(ui.domElement);
}

init();
