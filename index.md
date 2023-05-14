#### Home

#### Example 1

* Output Hello World

```python

print("Hello World!") #This outputs the text Hello World!
```

#### Example 2
* Get a list of files in the current directory and output them

```python
import os
files = []
for file in os.listdir():
  if file == "yourfilename.py":
     continue
  else:
    files.append(file)
  print(files)
 ```
 
 <h4>Example 3</h4>
* Comments

```python
#This is a comment it is usually used to explain what your code does. The computer ignores this.
"""This is a multiline comment"""
```
For more examples click this [link](tutorials/index)
