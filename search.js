function search(){
  var searchValue = document.getElementById("search").value;
  if(!searchValue == ""){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    var p = document.createElement("p");
    p.innerText = "Enter a page!";
    document.body.appendChild(p);
  }
}
