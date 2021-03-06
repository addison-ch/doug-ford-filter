filter(document.body)

function getName() { // names to replace instances of "Doug Ford"
    const names = ['Doug Fraud', 'the Timbit',
        'Doug "Timbit" Ford', 'Dougie Fresh', 'Doug "buck-a-beer" Ford',
        'Thug Ford', 'Doug Fraud', 'Dung Ford', 'Drug Fraud', 'Dingus Ford', 'Douggie Fresh', 'Trump North',
        'Douglas "Timbit" Ford', 'Doug "no platform" Ford', 'Douggie Ford', 'DoFo'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName
}
function getNameAlternative() { // names to replace instances of "Premier Ford"
    const names = ['Premier Fraud', 'Premier Timbit',
        'Doug "Timbit" Ford', 'Doug "buck-a-beer" Ford',
        'Thug Ford', 'Premier Fraud', 'Premier Dung Ford'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName
}
function getNameNation() { // names to replace instances of "FordNation"
    const names = ['FraudNation', 'ThugNation', "DouggiesGoons"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName
}
function filter(text) {
    if (text.nodeType === Text.TEXT_NODE) {
        text.textContent = text.textContent.replace(/doug ford/gi, getName())
        text.textContent = text.textContent.replace(/dougford/gi, getName().split(" ").join(""))
        text.textContent = text.textContent.replace(/premier ford/gi, getNameAlternative())
        text.textContent = text.textContent.replace(/premier doug ford/gi, getNameAlternative())
        text.textContent = text.textContent.replace(/douglas robert ford/gi, getName())
        text.textContent = text.textContent.replace(/fordnation/gi, getNameNation())
    }
    else if (text.hasChildNodes()) {
        text.childNodes.forEach(filter);
    }
}

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        filter(document.body);
    }
};
window.onload = function () {
    filter(document.body);
};


window.setInterval(function () {
    filter(document.body);
}, 800);