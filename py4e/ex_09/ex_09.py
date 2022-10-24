fname = input('Enter filename: ')
if len(fname)  < 1 : fname = 'clown.txt'
fhand = open(fname)

di = dict()
for line in fhand:
    line = line.rstrip()
    wds = line.split()
    for w in wds:
        di[w] = di.get(w,0) + 1
        
big_word = None
big_count = None
for k,v in di.items():
    if big_word is None or big_count < v:
        big_word = k
        big_count = v
        
print('Highest frequency word and frequency: ', big_word, big_count)
        