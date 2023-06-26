if(window.undefined){
  window.location.assign("404.html");
}
if(window.onerror){
  document.write("<h1 style='color:white;'>There was an unexpected error with the website.</h1>");
  document.body.style.background = "black";
}
