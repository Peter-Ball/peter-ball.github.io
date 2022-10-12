//Play typing animation
var txt = "welcome";
var i = 0;
var type_speed =200;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, type_speed);
    };
};
var interval = 2000;
var word_net = {};

$.getJSON("word_net.json", function(json) {
    console.log(json); // show the JSON file content into console
    setTimeout(function() {
        txt = update(txt, json[txt].slice(0));
        setInterval(function() {txt = update(txt, json[txt].slice(0))}, 300);}, 8000); 
});

show_popup = function() {
    document.getElementById("levenshtein_box").style.display = "block";
};

hide_popup = function() {
    document.getElementById("levenshtein_box").style.display = "none";
};



function update(word, adj) {
    var title = document.querySelector('#title');
    var idx = Math.floor(Math.random() * (adj.length));
    var newWord = adj[idx];
    title.innerHTML = newWord;
    return newWord;
};