function search(){
  var searchInput = document.getElementById("search");
  var searchValue = searchInput.value;
  if(!searchValue){//searchValue is falsy
    var searchNotFound = document.createElement("h1");
    searchNotFound.innerHTML = "<h1>JavaScript Error: searchValue not found! <a href='https://pytutorials5.wordpress.com/2023/05/14/hello-world/'>Report bug</a></h1>";
    searchInput.style.display = "none";
    searchNotFound.onclick = searchInput.style.display = "block";
    document.body.appendChild(searchNotFound);
    alert("Search value is " + searchValue);
    return false;
  }
  if(searchValue){
    if(searchValue != ""){
      window.location.assign("https://pytutorials.github.io/" + searchValue);
      return false;
    }
    if(searchValue == null || searchValue == ""){
      var h1 = document.createElement("h1");
      h1.innerText = "Enter a page!");
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
      return false;
    }
  }
}
