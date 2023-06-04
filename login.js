if(!localStorage.getItem("username")){
 document.write("<a href='signup'>Create a username for free</a>");
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
  alert("Welcome Back " + localStorage.getItem("username"));
}
function removeUsername(){
  localStorage.removeItem("username");
  window.location.reload();
}
function signup(){
  var username = document.getElementById("signup-form").value;//get the forms value.
  if(!username == ""){
   localStorage.setItem("username", username);
   alert("Refresh the page to see the changes! ");
  }else{
    document.write("Fill out the form properly! <a href='signup'>Go to the signup page</a>");
  }
}
