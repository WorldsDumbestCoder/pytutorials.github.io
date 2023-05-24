if(!localStorage.getItem("username")){
  var username = prompt("Create a username > ");
  localStorage.setItem("username", username);
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
}
function removeUsername(){
  localStorage.removeItem("username");
}
