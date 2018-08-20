
function cipherateText(catechedEvent) {
    var TocipherText = catechedEvent.target.value;
    debugger
    var cipheredText = cipherIt(TocipherText);
    document.getElementById('cipherText').value = cipheredText;
    debugger

}
function cipherIt(text) {
    var finalText = "";
    noChar = text.length;
    for (var i = 0; i < noChar; i++) {
        var test = text.charCodeAt(i);
        if (isChecked.checked)
            test--;
        else
            test++;
        debugger
        finalText += String.fromCharCode(test);
    }
    return finalText;
}
function copyPlease() {
    var copyText = document.getElementById("cipherText");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
    debugger
    // var copyText = document.getElementById("cipherText");
    // console.log(copyText);
    // copyText.select();
    // document.execCommand("copy");
    // // document.getElementById("copyButton").value = "Copied";
}

function checkBox(eventCheckBox) {
    if (eventCheckBox.checked) {
        document.getElementById('originalText').textContent = "Put your Cipher Text Here";
        document.getElementById('ChangedText').textContent = "Your Original Text";

    }
    else {
        document.getElementById('originalText').textContent = "Put your Text Here";
        document.getElementById('ChangedText').textContent = "Your Ciphered Text";
    }

}
