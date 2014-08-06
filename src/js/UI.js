function UI() {
	
	var that = this;

	this.init = function() {
		var container = document.createElement('div');
		this.domElement = container;


		this.canvas = document.createElement('canvas');
		container.appendChild(this.canvas);


		this.canvasInputWidth = document.createElement('input');
		this.canvasInputHeight = document.createElement('input');
		
		var canvasSizeDiv = document.createElement('div');
		canvasSizeDiv.appendChild(this.canvasInputWidth);
		canvasSizeDiv.appendChild(document.createTextNode('x'));
		canvasSizeDiv.appendChild(this.canvasInputHeight);

		this.canvasInputWidth.addEventListener('change', onSizeChange);
		this.canvasInputHeight.addEventListener('change', onSizeChange);

		function onSizeChange() {
			that.setCanvasSize(that.canvasInputWidth.value, that.canvasInputHeight.value);
		}

		container.appendChild(canvasSizeDiv);

		this.setCanvasSize(320, 240);
	};

	this.setCanvasSize = function(width, height) {
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvasInputWidth.value = width;
		this.canvasInputHeight.value = height;
	};


	//
	
	this.init();
	

}

module.exports = UI;
