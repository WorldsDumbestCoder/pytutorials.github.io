var code=['<a href="tutorial6">Tutorial 6</a> <a href="tutorial7">Tutorial 7</a>  <a href="tutorial8">Tutorial 8</a>  <a href="tutorial9">Tutorial 9</a> <a href="tutorial10">Tutorial 10</a>']
if(localStorage.getItem("username")){
    document.write(code);
}else{
    var p = document.createElement("p");
    p.innerText = "Signup to unlock more tutorials";
    document.body.appendChild(p);
}
