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
  var allow;
  if(allow == false){
     localStorage.setItem("popup_username=false");
     alert("Changes Saved!");
  }
  if(allow == true){
    if(localStorage.getItem("popup_username=false")){
      localStorage.removeItem("popup_username=false");
    }
  }
}
