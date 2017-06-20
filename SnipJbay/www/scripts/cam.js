// from camera OR ?
var pictureSource;
// Type data format or file uri
var destinationType;
// Wait for cordova to load
document.addEventListener("deviceready", onDeviceReady, false);
// Cordova is ready
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

//Capture Photo
function takePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onError, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onError, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType:source

    });
}

// CALL BACKS
// If we capture a photo
function onPhotoDataSuccess(imageData) {
    //Set the image handler
    var dataImage = document.getElementById('dataImage');

    // Unhide ... see html
    dataImage.style.display = 'block';

    //Show Photo
    dataImage.src = "data:image/jpeg:base64," + imageData;

}
    //If we get an image
function onURISuccess(imageURI) {
    //Set the image handler
    var uriImage = document.getElementById('uriImage');

    // Unhide ... see html
    uriImage.style.display = 'block';

    //Show Photo
    uriImage.src = imageURI;

}

// Handle errors
function onError() {
    alert('Error' + error);
}