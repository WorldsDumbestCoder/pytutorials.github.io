if(!localStorage.getItem("username")){
  alert("Redirecting you to the signup page");
  window.location.assign("signup");
}
function change_username(){
  var username = prompt("Enter your new username > ");
  localStorage.removeItem("username");
  localStorage.setItem("username", username);
}
function remove_username(){
  localStorage.removeItem("username");
  alert("You have been signed out! Refresh the page to see the changes");
}
function home_settings(){
  var form = document.getElementById("form").value;
  alert(form)
  if(form == 2){
     var popup_username = false;
     localStorage.setItem("popup_username=false", popup_username);
     alert(popup_message);
  }
}
