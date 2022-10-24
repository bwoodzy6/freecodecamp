import re

result = []
hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    match = re.findall('^From: .*@([^ ]*)', line)
    if len(match) > 0:
        # result.append(match)
        print(match)
    
# print(result)
            