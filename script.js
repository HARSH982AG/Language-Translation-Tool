document.getElementById('translate-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const language = document.getElementById('language-select').value;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|${language}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output-text').value = data.responseData.translatedText;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Translation failed. Please try again.');
        });
});document.getElementById('translate-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const language = document.getElementById('language-select').value;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|${language}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output-text').value = data.responseData.translatedText;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Translation failed. Please try again.');
        });
});