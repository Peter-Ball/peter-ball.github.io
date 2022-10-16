-------
permalink: /index.html
-------

# cs.mcgill.ca/~pball

A minimal website I made as a portal to my resume and lab work. The website includes a demo of the Levenshtein distance; the welcome text at the top is continually transformed into other words of <3 Levenshtein from each other.

### Levenshtein
The repo includes a script, but you would need to download [common.txt](https://www.gutenberg.org/files/3201/files/COMMON.TXT) and [this list of obscenities](https://www.cs.cmu.edu/~biglou/resources/bad-words.txt) in order to make it run. The idea is to find a network of words that have a path to "welcome" where an edge exists if two words have <3 Levenshtein. This network is stored as a .json file, and javascript code in [main.js](https://github.com/Peter-Ball/personal-website/blob/master/main.js) randomly traverses this graph with "Welcome" as its starting point.
