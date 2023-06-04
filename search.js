function search(){
  var searchValue = document.getElementById("search").value;
  if(!searchValue == ""){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    document.write("<h1>Enter a page!</h1> <a href='index'>Go Home</a>");
    document.write("<a href='c'>c</a>");
  }
}
