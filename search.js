function search(){
  var s = document.getElementById("s").value;
  if(s != ""){
    window.location.assign("https://pytutorials.github.io/" + s);
  }else{
    var h1 = document.createElement("h1");
    h1.innerText = "Enter a page!";
    document.body.appendChild(h1);
  }
}
