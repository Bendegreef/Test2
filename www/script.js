/* jshint
browser: true,
devel: true,
*/
/*
global canvasCamera
*/
var pictureSource; // picture source
var destinationType; // sets the format of returned value 
var objCanvas;
// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
   console.log(window.device);
   console.log(window.plugins);
    alert('device ready');
	objCanvas = document.getElementById("canvas")
    window.plugin.CanvasCamera.initialize(objCanvas);
	alert('canvas ready');

    //document.getElementById("takePicture").addEventListener("click", takePicture, false);
	document.getElementById("takePicturePreview").addEventListener("click", takePicturePreview, false);
	
}
function takePicturePreview(e) {
	alert('takepicture');
		window.plugin.takePicture(success);
}

function success (data) {
	objCanvas.src = "data:image/jpeg;base64," + data;
}

function takePicture(e) {
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

}