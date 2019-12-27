var txt = "Welcome";
var interval = 2000;
var word_net = {};
$.getJSON("word_net2.json", function(json) {
    console.log(json); // show the JSON file content into console
    setTimeout(function() {
        txt = update(txt, json[txt].slice(0));
        setInterval(function() {txt = update(txt, json[txt].slice(0))}, 5000);}, 10000); 
});

function update(word, adj) {
    var title = document.querySelector('#title');
    title.classList.remove('reveal');
    title.classList.add('fade');
    var idx = Math.floor(Math.random() * (adj.length));
    var newWord = adj[idx];
    title.style.opacity = 0;
    setTimeout(function() {
        title.innerHTML = newWord;
        title.style.opacity = 1;
    }, 500);
    return newWord;
}