if(!localStorage.getItem("username")){
  var username = prompt("Create a username > ");
  localStorage.setItem("username", username);
}else{
  document.write("<a href='javascript:localStorage.removeItem('username');'>Logout</a>");
}
