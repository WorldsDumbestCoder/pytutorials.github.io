function show_user(){
	var username = localStorage.getItem("username");
	if(username){
		var p = document.createElement("p");
		p.innerText = username;
		p.style.color = "green";
		p.style.textAlign = "center";
		document.body.appendChild(p);
	}else{
		var p = document.createElement("p");
		p.innerText = "Your username was not found";
		p.style.color = "red";
		p.style.textAlign = "center";
		document.body.appendChild(p);
	}
}
function add_user(){
	var user = prompt("Create your username: ");
	localStorage.setItem("username", user);
	var p = document.createElement("p");
	p.innerText = "Your username has been created";
	document.body.appendChild(p);
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
