function show_user(){
	var username = localStorage.getItem("username");
	var user = document.getElementById("username");
	let message = ‘{username}’;
	user.value = message;
	user.style.color = "green";
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
