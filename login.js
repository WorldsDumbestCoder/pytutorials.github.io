if(!localStorage.getItem("username")){
 document.getElementById("signup").style.display = "block";
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a><br/>");
  document.write("<a href='username'>Username settings</a><br/>");
  if(window.location.href == "https://pytutorials.github.io/signup"){
   alert("You already signed up.")
   window.location.assign("username")
  }
  if(window.location.href == "https://pytutorials.github.io/"){
   if(!localStorage.getItem("!username")){
      alert("Welcome Back " + localStorage.getItem("username"));   
    }
  }
}
function removeUsername(){
  localStorage.removeItem("username");
  window.location.reload();
}
function signup(){
  var username = document.getElementById("signup-form").value;//get the forms value.
  if(!username == ""){
   localStorage.setItem("username", username.toString());
   document.write("<h1>Welcome to PyTutorials " + localStorage.getItem("username") + "</h1><br/>");
   document.write("<h2>Refresh the page to see the changes</h2><br/>");
   document.write("<p>You can now visit the page /username. You've also unlocked more tutorials! <a href='username'>See username settings</a></p><br/>");
   document.write("<footer>Thank you for using PyTutorials!</footer>");
  }else{
   var message = document.createElement("h1");
   message.innerText = "Fill out the page properly!";
   message.textAlign = "center";
   message.style.color = "red";
   document.body.appendChild(message);
   var refresh = document.createElement("a");
   a.innerText = "Reload the page";
   a.href = "signup";
   document.body.appendChild(a);
  }
}
