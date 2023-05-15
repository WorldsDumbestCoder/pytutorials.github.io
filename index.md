<small>![image](https://github.com/pytutorials/pytutorials.github.io/assets/124309800/2f01bf5b-7f0d-4331-9155-77c357d52169)</small>

<a href="https://pytutorials.github.io">Home</a> <a>|</a> <a href="https://pytutorials.github.io/tutorials">Tutorials</a>
<hr/>
<script src="404.js"></script>

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

[Test your code here](https://onlinegdb.com)

[Report a bug](https://pytutorials5.wordpress.com/2023/05/14/blog/)
