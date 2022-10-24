counts = {}

print('Enter a filename: ')
fname = input('')


try :
    fhand = open(fname)
except :
    print('Invalid filename')
    quit()

for line in fhand :
    if len(line) < 1 : continue
    words = line.strip().split()
    for word in words : 
        counts[word] = counts.get(word,0) + 1


bigcount = None
bigword = None
for word,count in counts.items() :
    if bigcount is None or count > bigcount:
        bigword = word
        bigcount = count

print(bigword, bigcount)

