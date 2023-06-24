function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != ""){
    window.location.assign(searchValue);
  }else{
    var h1 = document.createElement("h1");
    h1.innerText = "Search for a page";
    h1.style.position = "absolute";
    h1.style.bottom = "100%";
    document.body.appendChild(h1);
  }
}
