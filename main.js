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
/*fetch("word_net.json")
.then(response => 
   word_net = response.json()
)
console.log(word_net);*/

$.getJSON("word_net2.json", function(json) {
    console.log(json); // show the JSON file content into console
    var repeater;
    setTimeout(function() {
        document.getElementById("title").onmouseover=function(){repeater=setInterval(explore_levenshtein(), 300)};
        document.getElementById("title").onmouseout=function(){clearInterval(repeater)};
        function explore_levenshtein() {
            txt = update(txt, json[txt].slice(0));
        }
    }, 5000)
});


/*$.getJSON("word_net.json", function(json) {
    setTimeout(function() {
        txt = update(txt, json[txt].slice(0));
        setInterval(function() {txt = update(txt, json[txt].slice(0))}, 300);}, 8000); 
});*/

show_popup = function() {
    document.getElementById("levenshtein_box").style.display = "block";
};

hide_popup = function() {
    document.getElementById("levenshtein_box").style.display = "none";
};

reset_welcome = function () {
    txt = "welcome";
    title.innerHTML = txt;
}



function update(word, adj) {
    var title = document.querySelector('#title');
    var idx = Math.floor(Math.random() * (adj.length));
    var newWord = adj[idx];
    title.innerHTML = newWord;
    return newWord;
};