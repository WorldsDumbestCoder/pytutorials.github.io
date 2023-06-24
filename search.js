function search(){
  var searchValue = document.getElementById("search").value;
  if(searchValue != ""){
    window.location.assign(searchValue);
    if(window.undefined){
     document.write("<h1>Search Value Is Not A Page!</h1><br/>");
     document.write("<a href='javascript:window.location.reload();'>Reload the page</a>");
    }
  }else{
    alert("Fill out the form properly!");
  }
}
