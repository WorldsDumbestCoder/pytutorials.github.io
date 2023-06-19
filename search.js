function search(){
  alert("Search has been called!");
  var searchInput = document.getElementById("search");
  var searchValue = searchInput.value;
  if(searchValue != null && searchValue != "")){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    searchInput.value = "";
    var h1 = document.createElement("h1");
    h1.innerText = "Enter a page!";
    h1.style.position = "absolute";
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
function searchDefined(){
  var searchBar = document.getElementById("search");
  if(!searchBar){
    alert("JavaScript Error: searchBar not defined!");
  }else{
    search();
  }
}
