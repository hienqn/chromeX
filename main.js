// $(window).on("load", function () {
//     // Handler when all assets (including images) are loaded
//     alert("This is working");
//     console.log("dwadaw")
// });

console.log("Chrome extension go?");

window.addEventListener('mouseup', wordSelected);

function wordSelected(){
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);
    if (selectedText.length > 0){
        let message = {
            text: selectedText
        }
        chrome.runtime.sendMessage(message);
    }
}