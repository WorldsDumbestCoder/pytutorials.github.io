if(!localStorage.getItem("username")){
  alert("Redirecting you to the signup page");
  window.location.assign("signup");
}
function change_username(){
  var username = prompt("Enter your new username > ");
  localStorage.removeItem("username");
  localStorage.setItem("username", username);
  vat p = document.createElement("p"):
  p.innerText = "Your username has been saved. Click me to see undisplay this";
  p.onclick = this.style.display = "none";
}
function remove_username(){
  localStorage.removeItem("username");
  alert("You have been signed out! Refresh the page to see the changes");
}
function dont_username_popup(){
  if(!localStorage.getItem("popup_username=false")){
    localStorage.setItem("popup_username=false", false);
    var p = document.createElement("p");
    p.innerText = "Changes Saved! Click me to undisplay this";
    p.style.align = "center";
    p.style.color = "green";
    p.onclick = this.style.display = "none";
    document.body.appendChild(p);
  }else{
    var p = document.createElement("p");
    p.innerText = "This is already set! Click me to undisplay this";
    p.style.align = "center";
    p.onclick = this.style.display = "none";
    p.style.color = "red";
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
    p.onclick = this.style.display = "none";
    document.body.appendChild(p);
  }else{
    var p = document.createElement("p");
    p.innerText = "This is already set! Click me to undisplay this";
    p.style.align = "center";
    p.style.color = "red";
    p.onclick = this.style.display = "none";
    document.body.appendChild(p);
  }
}
