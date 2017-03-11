function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	 navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function onSuccess(acceleration) {
    let data = 'Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n';

    document.body.innerHTML = data;
}

function onError() {
    alert('onError!');
}

var options = { frequency: 3000 };  // Update every 3 seconds
