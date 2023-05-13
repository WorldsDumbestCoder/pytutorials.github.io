# How to loop through files and print out the files names in python?
```python

files = []
for file in os.listdir():
  if file == "yourfilename.py":
   continue
  else:
    files.append(file)
  print(file)
'''
