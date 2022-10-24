fname = input('Enter the file name: ')
try: 
    fhand = open(fname)
except:
    print('File cannont be opened:', fname)
    quit()

count = 0
for line in fhand :
     line = line.strip()
     if len(line) < 1 : continue
        
     print(line[0])
