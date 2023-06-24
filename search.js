function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != ""){
    window.location.assign(searchValue);
  }else{
    alert("Properly fill out the search form!");
  }
}
