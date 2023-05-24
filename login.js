if(!localStorage.getItem("username")){
  var username = prompt("Create a username > ");
  localStorage.setItem("username", username);
}
