if(window.undefined){
  const xhttp  = new XMLHttpRequest();
  xhttp.onload = function(){
    var div = document.createElement("div");
    div.innerHTML = this.responseText;
  }
  xhttp.open("GET", "404.html");
  xhttp.send();
}
