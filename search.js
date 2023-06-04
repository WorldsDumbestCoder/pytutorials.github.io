function search(){
  var searchValue = document.getElementById("search").value;
  if(!searchValue == ""){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    var new_search = prompt("Enter a page on this website");
    window.location.assign("https://pytutorials.github.io/" + new_search);
  }
}
