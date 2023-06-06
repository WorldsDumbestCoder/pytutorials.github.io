function search(){
  var searchValue = document.getElementById("search").value;
  if(!searchValue == ""){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    document.write("<h1 style='font-family:cursive;'>Enter a page!</h1><br/>");
    document.write("<a href='index'>Go Home</a>");
    document.write("<em>Thanks for using PyTutorials!</em>");
  }
}
