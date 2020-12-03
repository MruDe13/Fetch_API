var inputTxt = document.querySelector("#inputText");
var translate_btn = document.querySelector("#btn-translate");
var outputtxt = document.querySelector("#outputText");

var Url = "https://api.funtranslations.com/translate/minion.json";

function translate(text) {
    console.log(text)
    return Url + "?" + "text=" + text
}

function errorHandling(error){
    console.log("Error Occured", error);
    alert("Error Occured: Please try again in some time.");
}

function translatedOutput() {
    var inputText = inputTxt.value;
    fetch(translate(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputtxt.innerText = translatedText
        })
        .catch(errorHandling)
};

translate_btn.addEventListener("click", translatedOutput);