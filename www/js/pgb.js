function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	 navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function onSuccess(acceleration) {
    let data = 'Acceleration X: ' + acceleration.x + '<br>' +
          'Acceleration Y: ' + acceleration.y + '<br>' +
          'Acceleration Z: ' + acceleration.z + '<br>' +
          'Timestamp: '      + acceleration.timestamp + '<br>';

    document.body.innerHTML = data;
}

function onError() {
    alert('onError!');
}

var options = { frequency: 500 };  // Update every 3 seconds
