function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != null || searchValue != ""){
    window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    alert("Properly fill out the search form!");
  }
}
