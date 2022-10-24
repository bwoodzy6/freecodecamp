import re

hand = open('mbox-short.txt')

numlist = []
for line in hand:
    line = line.rstrip()
    match = re.findall('^X-DSPAM-Confidence: ([0-9.]+)',line)
    if len(match) != 1: continue
    num = float(match[0])
    numlist.append(num)
    
print('Maximum: ', max(numlist))