if(!localStorage.getItem("username")){
  alert("Redirecting you to the signup page");
  window.location.assign("signup");
}
function change_username(){
  var username = prompt("Enter your new username > ");
  localStorage.removeItem("username");
  localStorage.setItem("username", username);
  var p = document.createElement("p");
  p.innerText = "Your username has been saved.";
  p.style.color = "green";
  p.style.align = "center";
  document.body.appendChild(p);
  var thanksNote = document.createElement("footer");
  thanksNote.innerHTML = "<footer>Thanks for using <em>PyTutorials</em></footer>";
  thanksNote.style.position = "absolute";
  thanksNote.style.align = "center";
  thanksNote.top = "100%";
  
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
    document.body.appendChild(p);
    var thanksNote = document.createElement("footer");
    thanksNote.innerHTML = "<footer>Thanks for using <em>PyTutorials</em></footer>";
    thanksNote.style.position = "absolute";
    thanksNote.style.top = "100%":
    thanksNote.style.align = "center":
    document.body.appendChild(thanksNote);
  }else{
    var p = document.createElement("p");
    p.innerText = "This is already set!";
    p.style.align = "center";
    p.style.color = "red";
    var thanksNote = document.createElement("footer");
    thanksNote.innerHTML = "<footer>Thank you for using <em>PyTutorials</em></footer>";
    thanksNote.style.align = "center";
    thanksNote.style.positon = "absolute";
    thanksNote.style.top = "100%";
    document.body.appendChild(thanksNote);
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
    var thanksNote = document.createElement("footer");
    thanksNote.innerHTML ="<footer>Thank you for using <em>PyTutorials</em></footer>";
    thanksNote.style.top = "100%";
    thanksNote.position = "absolute";
    thanksNote.style.align = "center";
    document.body.appendChild(thanksNote);
    document.body.appendChild(p); 
  }else{
    var p = document.createElement("p");
    p.innerText = "This is already set!";
    p.style.align = "center";
    p.style.color = "red";
    document.body.appendChild(p);
    var thanksNote = document.createElement("footer");
    thanksNote.innerHTML = "<footer>Thank you for using <em>PyTutorials</em></footer>";
    thanksNote.style.align = "center";
    thanksNote.style.top = "100%";
    thanksNote.style.position = "absolute";
    document.body.appendChild(thanksNote);
  }
}
