function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != ""){
     window.location.assign("https://pytutorials.github.io/" + s);
  }else{
    var h1 = document.createElement("h1");
    h1.innerText = "Enter a page!";
    document.body.appendChild(h1);
  }
}
