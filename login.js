if(!localStorage.getItem("username")){
 document.write("<a href='javascript:signup()'>Create a username for free</a>");
 window.location.assign("index.html");
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
  alert("Welcome Back " + localStorage.getItem("username"));
}
function removeUsername(){
  localStorage.removeItem("username");
}
function signup(){
  var username = prompt("Create a username > ");
  localStorage.setItem("username", username);
  window.location.assign("index.html");
}
