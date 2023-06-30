if(window.undefined){
  const xhttp  = new XMLHttpRequest();
  xhttp.onload = function(){
    var div = document.createElement("div");
    div.innerHTML =  this.responseText;
    var note = document.createElement("p");
    note.innerText = "Powered by JavaScript";
    document.body.appendChild(note);
  }
  xhttp.open("GET", "404.html");
  xhttp.send();
}
