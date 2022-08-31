function displayResult1() {
    document.getElementById('output').innerHTML = 'Loading...';
}

function displayResult2() {
    document.getElementById('output').innerHTML =
        'You will see this message in 10 seconds.';
}

setTimeout(displayResult2, 10000);
setTimeout(displayResult1, 5000);
setTimeout(() => {
    document.getElementById('output').innerHTML =
        'You will see this message in 7 seconds.';
}, 7000);
