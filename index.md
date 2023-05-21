<p>print("Hello World!")</p>

<a href="javascript:window.location.reload();">Home</a> <a>|</a> <a href="https://pytutorials.github.io/tutorials">Tutorials</a>
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
  if os.path.isfile(file):
   if file == "yourfile.py":
     continue
   else:
     files.append(file)
  else:
     continue
 ```
 
 <h4>Example 3</h4>
* Comments

```python
#This is a comment it is usually used to explain what your code does. The computer ignores this.
"""This is a multiline comment"""
```
For more examples click this [link](tutorials/index)

[Test your code here](https://onlinegdb.com)

<iframe src="https://pytutorials5.wordpress.com/2023/05/14/hello-world/" height="500px" width="1000px"></iframe>

<em>Written in HTML, Markdown and JavaScript.</em>
