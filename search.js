function search(){
  var searchValue = document.getElementById("search").value;
  if(!(searchValue == "")){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    searchValue.placeholder = "Enter a page!";
    var h1 = document.createElement("h1");
    h1.innerText = "Enter a page!";
    h1.style.position = "absolite";
    h1.style.bottom = "100%";
    var br = document.createElement("br");
    var em = document.createElement("em");
    em.innerText = "Thanks for using PyTutorials!";
    em.style.position = "absolute";
    em.style.top = "100%";
    em.style.right = "50%";
    document.body.appendChild(h1);
    document.body.appendChild(br);
    document.body.appendChild(em);
  }
}
