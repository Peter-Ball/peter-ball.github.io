//Play typing animation
var txt = "Welcome";
var i = 0;
var type_speed =200;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += "<span>"+txt.charAt(i)+"</span>";
        i++;
        setTimeout(typeWriter, type_speed);
    }
};
var interval = 2000;
var word_net = {};
$.getJSON("word_net2.json", function(json) {
    console.log(json); // show the JSON file content into console
    setTimeout(function() {
        txt = update(txt, json[txt].slice(0));
        setInterval(function() {txt = update(txt, json[txt].slice(0))}, 200);}, 8000); 
});



function update(word, adj) {
    var title = document.querySelector('#title');
    var idx = Math.floor(Math.random() * (adj.length));
    var newWord = adj[idx];
    title.innerHTML = newWord;
    return newWord;
};