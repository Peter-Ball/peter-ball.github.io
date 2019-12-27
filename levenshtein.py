import random
from collections import Counter
import json

def load_words(file):
    with open(file) as word_file:
        words = word_file.read().split()

    return words

def make_table(l, h):
    table = []
    for i in range(h):
        table.append([])
        for j in range(l):
            table[i].append(None)

    return table

def levenshtein(c1, c2):
    #Computes Levenshtein of two characters
    if c1 == c2:
        return 0
    else:
        return 1

def Needleman_Wunch(w1, w2):
    '''Finds the total Levenshtein score of two words using
        The Needlman-Wunch algorithm'''
    '''    while len(w1) > len(w2):
        w2.append('-')

    while len(w2) > len(w1):
        w1.append('-')'''
    w1 = '-' + w1
    w2 = '-' + w2
    table = make_table(len(w1), len(w2))

    for i in range(len(table[0])):
        table[0][i] = i

    for j in range(len(table)):
        table[j][0] = j

    for i in range(1, len(table)):
        for j in range(1, len(table[0])):
            table[i][j] = min(table[i-1][j] + levenshtein(w2[i], '-'),
                              table[i-1][j-1] + levenshtein(w1[j], w2[i]),
                              table[i][j-1] + levenshtein('-', w1[j])
                              )

    #All we care about for now is the number (not the solution)
    return table[len(table)-1][len(table[0])-1]


#MAIN
'''words = load_words('words_alpha.txt')
words.remove('welcome')

obscenities = load_words('obscene.txt')

for obscenity in obscenities:
    try:
        words.remove(obscenity)
    except ValueError:
        continue

words = [word for word in words if len(word) <= 8 and len(word) >= 5]

print(len(words))


#words = random.sample(words, 10000)
word_net = {}

counter = 1
for word in words:
    print(str(counter), end='\r')
    if(word == 'welcome'):
        continue

    dist = Needleman_Wunch('Welcome', word)
    if(dist < 3):
        word_net[word] = ['Welcome']
        word_net['Welcome'] = [word]

    counter += 1


words = random.sample(words, 10000)

in_net = list(word_net.keys())

net_size = len(in_net)
i = 0
while i < net_size:
    key = in_net[i]

    for word in words:
        if(word == key):
            continue

        dist = Needleman_Wunch(key, word)
        if(dist < 3):
            word_net[key].append(word)

            try:
                word_net[word].append(key)
            except KeyError:
                word_net[word] = [key]
                in_net.append(word)
                net_size += 1

    i += 1

    print(str((i, net_size)), end='\r')


print(word_net)

with open('word_net.json', 'w') as json_file:
    json.dump(word_net, json_file)'''


with open('word_net.json', 'r') as fp:
    word_net = json.load(fp)

    for word in word_net.keys():
        word_net[word] = list(set(word_net[word]))

    with open('word_net2.json', 'w') as fp2:
        json.dump(word_net, fp2)