if(!localStorage.getItem("username")){
  alert("Redirecting you to the signup page");
  window.location.assign("signup");
}
function change_username(){
  var username = prompt("Enter your new username > ");
  localStorage.removeItem("username");
  localStorage.setItem("username", username);
  var p = document.createElement("p"):
  p.innerText = "Your username has been saved.";
  p.style.color = "green";
  p.style.align = "center";
  document.body.appendChild(p);
  var button = document.createElement("button");
  button.onclick = undisplay();
  button.innerText = "Undisplay the paragraph";
  document.body.appendChild(button);
}
function undisplay(){
  document.getElementById("p").style.display = "none";
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
    p.style.color = "green";
    var button = document.createElement("button");
    button.innerText = "Clock me to undisplay the paragraph";
    document.body.appendChild(button);
    document.body.appendChild(p);
  }else{
    var p = document.createElement("p");
    p.innerText = "This is already set!";
    p.style.align = "center";
    p.style.color = "red";
    p.id = "p";
    var button = document.createElement("button");
    button.innerText = "Click me to undisplay the paragraph";
    button.onclick = undisplay();
    document.body.appendChild(button);
    document.body.appendChild(p);
    
 }
}
function popup_username(){
  if(localStorage.getItem("popup_username=false")){
    localStorage.removeItem("popup_username=false");
    var p = document.createElement("p");
    p.innerText = "Changes Saved!";
    p.style.align = "center";
    p.style.color = "green";
    p.id = "p";
    document.body.appendChild(p);
    var button = document.createElement("button");
    button.innerText = "Click me to display the paragraph";
    button.onclick = undisplay();
    document.body.appendChild(button);
  }else{
    var p = document.createElement("p");
    p.innerText = "This is already set!";
    p.style.align = "center";
    p.style.color = "red";
    p.id = "p";
    var button = document.createElement("button");
    button.innerText = "Undispay the paragraph";
    button.onclick = undisplay();
    document.body.appendChild(button);
    document.body.appendChild(p);
  }
}
