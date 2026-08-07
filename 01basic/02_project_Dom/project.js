if (typeof document === 'undefined') {
    console.log('This script needs a browser environment. Open one.html in a browser to use the DOM features.');
} else {
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('Button clicked:', button.textContent);
            if (body) {
                body.style.backgroundColor = '#f8f8f8';
            }
        });
    });
}
