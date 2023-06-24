function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != ""){
    window.location.assign(searchValue);
  }else{
    alert("Fill out the form properly!");
  }
}
