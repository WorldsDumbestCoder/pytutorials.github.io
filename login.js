if(!localStorage.getItem("username")){
 document.write("<a href='javascript:signup()'>Create a username for free</a>");
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
}
function removeUsername(){
  localStorage.removeItem("username");
}
function signup(){
  var username = prompt("Create a username > ");
  localStorage.setItem("username", username);
}
