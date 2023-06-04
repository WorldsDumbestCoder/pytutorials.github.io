if(!localStorage.getItem("username")){
 document.write("<a href='javascript:signup()'>Create a username for free</a>");
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
  alert("Welcome Back " + localStorage.getItem("username"));
}
function removeUsername(){
  localStorage.removeItem("username");
  window.location.reload();
}
function signup(){
  var username = prompt("Create a username > ");
  if(!username == ""){
   localStorage.setItem("username", username);
   alert("Refresh the page to see the changes! ");
  }else{
    var username2 = prompt("Create a username > ");
    if(!username2 == ""){
     localStorage.setItem("username", username);
    }else{
     alert("Signup has failed!");
    }
  }
}
