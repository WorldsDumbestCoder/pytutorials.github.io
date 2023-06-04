var code=['<a href="tutorial11">Tutorial 11</a> <a href="tutorial12">Tutorial 12</a>  <a href="tutorial13">Tutorial 13</a>  <a href="tutorial14">Tutorial 14</a> <a href="tutorial15">Tutorial 15</a>']
if(localStorage.getItem("username")){
    document.write(code);
}else{
    var p = document.createElement("p");
    p.innerText = "Signup to unlock more tutorials";
    document.body.appendChild(p);
}
