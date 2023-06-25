function show_user(){
	var username = localStorage.getItem("username");
	var user = document.createElement("p");
	user.innerText = "Your username is " + username;
	user.style.position = "absolute";
	user.style.bottom = "100%";
	user.style.textAlign = "center";
	document.body.appendChild(user);
}
function add_user(){
	var user = prompt("Create your username: ");
	localStorage.setItem("username", user);
	var username = document.getElementById("username");
	username.value = "Your username is " + user;
	username.style.color = "lightblue";
}
function remove_user(){
	var username = document.getElementById("username");
	username.value = "Your username " + localStorage.getItem("username") + " has been removed";
	username.style.color = "red";
	localStorage.removeItem("username");
	alert("Username has been removed! Refresh the page to see the changes");
}
function change_user(){
	var username = prompt("Create a username: ");
	localStorage.removeItem("username");
	localStorage.setItem("username", username);
}
