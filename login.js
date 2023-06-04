if(!localStorage.getItem("username")){
 document.getElementById("signup").style.display = "block";
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
  if(window.location.href == "https://pytutorials.github.io/signup"){
   alert("You already signed up.")
   window.history.back();
  }
  if(window.location.href == "https://pytutorials.github.io"){
    alert("Welcome Back " + localStorage.getItem("username"));
  }
}
function removeUsername(){
  localStorage.removeItem("username");
  window.location.reload();
}
function signup(){
  var username = document.getElementById("signup-form").value;//get the forms value.
  if(!username == ""){
   localStorage.setItem("username", username);
   document.write("Refresh the page to see the changes. ");
  }else{
    document.write("Fill out the form properly! <a href='signup'>Go to the signup page</a>");
  }
}
