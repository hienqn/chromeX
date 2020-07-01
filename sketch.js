function setup() {
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word.trim();
    src = `https://books.google.com/ngrams/interactive_chart?content=${word}&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url=t1%3B%2C${word}%3B%2Cc0`;
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
    const body = document.getElementsByTagName("BODY")[0];
    body.appendChild(node);
}
setup();

