// $(window).on("load", function () {
//     // Handler when all assets (including images) are loaded
//     alert("This is working");
//     console.log("dwadaw")
// });

console.log("alll");

window.addEventListener('mouseup', wordSelected);

function wordSelected(){
    let selectedText = window.getSelection().toString();
    console.log(selectedText);
}