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
function dont_username_popup(){
  if(!localStorage.getItem("popup_username=false")){
    localStorage.setItem("popup_username=false", false);
    var p = document.createElement("p");
    p.innerText = "Changes Saved!";
    p.style.align = "center";
    document.body.appendChild(p);
  }else{
    alert("This is already set.");
  }
}
function popup_username(){
  if(localStorage.getItem("popup_username=false")){
    localStorage.removeItem("popup_username=false");
  }else{
    alert("This is already set.");
  }
}
