if(window.undefined){
  document.write("<h1>404 - Page Not Found</h1><br/>");
  document.write("<p>The page you were looking for does not exist</p><br/>");
  document.write("<a href='index.html'>Go Home</a><br/>");
}
if(window.onerror){
  document.write("<h1 style='color:white;'>There was an unexpected error with the website.</h1>");
  document.body.style.background = "black";
}
