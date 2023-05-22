function search(){
  var s = document.getElementById("search").value;
  try{
    if(s == ""){
      throw "Enter a tutorial!";
    }else{
      window.location.assign("tutorials/" + s);
    }
  }
}
