function UI() {
	
	var that = this;

	this.init = function() {
		var container = document.createElement('div');
		container.className = 'gifarator';
		this.domElement = container;

		var canvasRow = document.createElement('div');
		canvasRow.className = 'canvasRow';
		container.appendChild(canvasRow);
		
		var canvasContainer = document.createElement('div');
		canvasRow.appendChild(canvasContainer);
		this.canvas = document.createElement('canvas');
		canvasContainer.appendChild(this.canvas);

		this.addFrameButton = document.createElement('button');
		this.addFrameButton.innerHTML = '->';
		canvasRow.appendChild(this.addFrameButton);
		this.addFrameButton.addEventListener('click', addFrame);

		function addFrame() {
			var imgData = that.canvas.toDataURL('image/png');
			var img = document.createElement('img');
			img.src = imgData;
			that.framesContainer.appendChild(img);
		}
		
		this.framesContainer = document.createElement('div');
		this.framesContainer.className = 'frames';
		canvasRow.appendChild(this.framesContainer);


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

		this.gifItButton = document.createElement('button');
		container.appendChild(this.gifItButton);

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
