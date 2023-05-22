function validate(){
  var s = document.getElementById("search").value;
  try{
    if(s == ""){
      throw "Enter a page!";
    }else{
      search();
    }
  }catch(e){
      var h1 = document.createElement("h1");
      h1.innerText = e;
      document.body.appendChild(h1);
  }
}
function search(){
  var s = document.getElementById("s").value;
  window.location.assign("https://pytutorials.github.io/" + s);
}
