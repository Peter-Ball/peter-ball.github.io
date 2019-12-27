-------
permalink: /index.html
-------

# cs.mcgill.ca/~pball

A minimal website I made as a portal to my resume and lab work. The website includes a demo of the Levenshtein distance; the welcome text at the top is continually transformed into other words of <3 Levenshtein from each other.

### Levenshtein
The repo includes a script, but you would need to download [words-alpha.txt](https://github.com/dwyl/english-words/blob/master/words_alpha.txt) and [this list of obscenities](https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/en) in order to make it run. The idea is, find all words within 2 Levenshtein from welcome, and then, from a set of 10,000 randomly selected words, find a network of words that have a path to "Welcome" where an edge exists if two words have <3 Levenshtein. This network is stored as a .json file, and javascript code in [main.js](https://github.com/Peter-Ball/personal-website/blob/master/main.js) randomly traverses this graph with "Welcome" as its starting point.
