function search(){
  var searchValue = document.getElementById("search").value;
  if(!searchValue == ""){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    var h1 = document.createElement("h1");
    h1.innerText = "Enter a page!";
    var br = document.createElement("br");
    var em = document.createElement("em");
    em.innerText = "Thanks for using PyTutorials!";
    document.body.appendChild(h1);
    document.body.appendChild(br):
    document.body.appendChild(em);
  }
}
