(function () {
    console.log('Started iife execution.');
    var serverTextDiv = document.getElementById('serverText');
    serverTextDiv.innerText = 'Loading...';

    console.log('Executing api request');
    fetch('/api/values/10').then(function (response) {
        return response.text();
    }).then(function (text) {
        serverTextDiv.innerText = text;
    });

    console.log('Finished iife execution.');

    
})();

function clickMeExecuted() {
    console.log('Button was clicked');
}