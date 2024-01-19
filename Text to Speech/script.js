document.addEventListener('DOMContentLoaded', function () {
    if ('speechSynthesis' in window) {
        // Speech synthesis supported
        console.log('Speech synthesis supported.');
    } else {
        // Speech synthesis not supported
        console.error('Speech synthesis not supported.');
        alert('Speech synthesis is not supported in your browser. Please use a modern browser.');
    }
});

function convertText() {
    var inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        alert('Please enter some text to convert.');
        return;
    }

    var speechSynthesis = window.speechSynthesis;
    var speechMessage = new SpeechSynthesisUtterance(inputText);

    // Uncomment the following line if you want the speech to be in a specific language/locale.
    // speechMessage.lang = 'en-US';

    speechSynthesis.speak(speechMessage);
}
