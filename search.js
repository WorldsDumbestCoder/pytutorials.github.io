function search(){
  var s = document.getElementById("search").value;
  try{
    if(s == ""){
      throw "Enter a tutorial!";
    }else{
      window.location.assign("tutorials/" + s);
    }
  }catch(e){
      var h1 = document.createElement("h1");
      h1.innerText = e;
      document.body.appendChild(e);
  }
}
