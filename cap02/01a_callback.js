let calcBtn = document.querySelector('#calculate');
calcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let a = parseInt(document.querySelector('#first').value);
    let b = parseInt(document.querySelector('#second').value);

    function printThis(theSum) {
        document.getElementById('output').innerHTML = theSum;
    }

    function calculateTwo(a, b) {
        let sum = a + b;
        printThis(sum);
    }

    calculateTwo(a, b);
});
