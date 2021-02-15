filter(document.body)
function filter(text) {
    if (text.hasChildNodes()) {
        text.childNodes.forEach(filter);
    }
    else if (text.nodeType === Text.TEXT_NODE) {
        text.textContent = text.textContent.replace(/ford/gi, 'Timbit')
    }
}