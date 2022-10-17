# Requires COMMON.TXT from Project Gutenberg Moby II

import re

def main():

    # loading

    with open("COMMON.TXT") as fp:
        common = fp.read().split()

    with open("bad-words.txt") as fp:
        bad_words = fp.read().split()

    # cleaning

    unwanted_chars = ['.', '-', ' ']
    regex = re.compile(r'\.|-| |[A-Z]')
    common = [word for word in common if not regex.search(word)]

    #common = [word for word in common if len(word) <= 8 and len(word) >= 5]

    common = list(set(common) - set(bad_words))

    print(len(common))

    with open("wordlist2.txt", 'w') as fp:
        fp.write('\n'.join(common))




if __name__ == "__main__":
    main()