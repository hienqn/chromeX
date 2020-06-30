console.log('background running')

chrome.runtime.onMessage.addListener(receiver);

window.word = "coding train";

function receiver(request, sender, sendresp){
    console.log(request);
    window.word = request.text;
}
