# PyTutorials - Home
<p>print("Hello World!")</p>

<a href="index">Home</a> <a>|</a> <a href="https://pytutorials.github.io/tutorials">Tutorials</a> | <a id="signup" href="signup" style="display:none;">Signup</a>
<div class="search-form">
  <form action="javascript:search()">
    <input type="text" value="" id="search" placeholder="Search for a page..."/>
    <noscript>You can't signup or search for different pages if Javascript isn't enabled.</noscript>
  </form>
 </div>
<hr/>
<script src="errorhandle.js"></script>
<script src="search.js"></script>
<script src="login.js"></script>
<script src="timesVisited.js"></script>
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

[Add Recomendations](https://pytutorials5.wordpress.com/2023/05/14/hello-world/)
[Python examples](https://github.com/pytutorials/Python-Examples)
<a href="https://github.com/pytutorials/pytutorials.github.io/blob/main/README.md">About this project</a>
<p>This project is closed source. <a href="https://en.m.wikipedia.org/wiki/Comparison_of_open-source_and_closed-source_software">What is closed source?</a></p>
<footer>Written in HTML, Markdown, CSS, and JavaScript.</footer>
<a href="#top">Go back to the top of the page</a>
