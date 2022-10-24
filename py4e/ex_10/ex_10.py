fname = input('Enter filename: ')

fhand = open(fname)
wds_dict = dict()
for line in fhand:
    line.rstrip()
    if len(line) < 1: break
    wds = line.split()
    for w in wds:
        wds_dict[w] = wds_dict.get(w, 0) + 1
    

# tuples are immutable so we convert to a list of tuples and the k, v reversed to sort the dictionary above by value instead of key. This gives us the frequency of words in a given file 
# Manual version
# tmp = []
# for k,v in wds_dict.items():
#     tmp.append( (v,k) )

# tmp = sorted(tmp, reverse=True)
# # get the top 5 from tmp
# for v, k in tmp[:5]:
#     print(k, v)
    

# List comprehension version, also a lambda
print( sorted([ (v, k) for k,v in wds_dict.items()], reverse=True))