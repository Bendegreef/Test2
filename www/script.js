/* jshint
browser: true,
devel: true,
*/
/*
global CanvasCamera
*/
var pictureSource; // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
	console.log(window.device);
	console.log(window.plugins);
	alert('device ready');
	var objCanvas = document.getElementById("canvas");
	window.plugin.CanvasCamera.initialize(objCanvas);


	//document.getElementById("takePicture").addEventListener("click", takePicture, false);
	document.getElementById("takePicturePreview").addEventListener("click", onTakePicture, false);

}

function onTakePicture() {
	CanvasCamera.takePicture(onTakeSuccess);
	alert('onTakePicture');
	var opt = {
		quality: 75,
		destinationType: CanvasCamera.DestinationType.DATA_URL,
		encodingType: CanvasCamera.EncodingType.JPEG,
		saveToPhotoAlbum: false,
		correctOrientation: true,
		width: 200,
		height: 200
	};
	CanvasCamera.start(opt);
	alert('canvas ready');
}

function onTakeSuccess(data) {

		var objCanvas = document.getElementById("canvas");
		var context = objCanvas.getContext('2d');

		objCanvas.width = window.innerWidth;
		objCanvas.height = window.innerHeight;

		var x = 0;
		var y = 0;
		var width = window.innerWidth;
		var height = window.innerHeight;
		var imageObj = new Image();

		imageObj.onload = function () {
			context.drawImage(imageObj, x, y, width, height);
		};
			objCanvas.src = "data:image/jpeg;base64," + data; // options.encodingType == CanvasCamera.EncodingType.JPEG
			// image.src = "data:image/png;base64," + data; // options.encodingType == CanvasCamera.EncodingType.PNG
		}



		/*function takePicture(e) {
			navigator.camera.getPicture(onSuccess, onFail, {
				quality: 50,
				destinationType: navigator.camera.DestinationType.DATA_URL,
				allowEdit: true,
				targetWidth: 50,
				targetHeight: 50
			});
		}

		function onSuccess(imageData) {
			var image = document.getElementById('myImage');
			image.src = "data:image/jpeg;base64," + imageData;
		}

		function onFail(message) {
			setTimeout(function () {
				//alert('Failed because: ' + message);
			}, 0);

		}*/