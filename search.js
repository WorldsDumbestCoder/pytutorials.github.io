function search(){
  var s = document.getElementById("search").value;
  try{
    if(s == ""){
      throw "Enter a page!";
    }else{
      window.location.assign("https://pytutorials.github.io/" + s);
    }
  }catch(e){
      var h1 = document.createElement("h1");
      h1.innerText = e;
      document.body.appendChild(h1);
  }
}
