// Wordnik API key:
// let api_key = '/?api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'

function setup() {
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word.trim();
    src = `https://books.google.com/ngrams/interactive_chart?content=${word}&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url=t1%3B%2C${word}%3B%2Cc0`;
    // frame = document.getElementsByTagName('iframe');
    // frame.src = src;
    const node = document.createElement("iframe");
    node.src = src
    node.width = 900;
    node.height = 500;
    node.marginwidth = 0;
    node.marginheight = 0;
    node.hspace = 0;
    node.vspace = 0;
    node.frameborder = 0;
    node.scrolling = "no";
    //     < iframe name = "ngram_chart"
    // src = ""
    // width = 900 height = 500 marginwidth = 0 marginheight = 0 hspace = 0 vspace = 0 frameborder = 0 scrolling = no ></iframe >
    const body = document.getElementsByTagName("BODY")[0];
    body.appendChild(node);
    // loadJSON(url, gotData);
    // function gotData(data) {
    //     createP(data[0].text).style('font-size', '48pt');
    // }
    //createP(word);
}

setup();

