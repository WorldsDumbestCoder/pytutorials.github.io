function add_user(){
	if(!localStorage.getItem("username")){
		var user = prompt("Create your username: ");
		localStorage.setItem("username", user);
		var p = document.createElement("p");
		p.style.color = "green";
		p.style.textAlign = "center";
		p.innerText = "Your username has been created";
		document.body.appendChild(p);
	}else{
		var p = document.createElement("p");
		var a = document.createElement("a");
		p.innerText = "Username already created.";
		p.style.color = "red";
		p.style.textAlign = "center";
		a.innerText = "Go Home";
		a.href = "index.html";
		document.body.appendChild(p);
		document.body.appendChild(a);
	}
}
function change_user(){
	var username = prompt("Create a username: ");
	localStorage.removeItem("username");
	localStorage.setItem("username", username);
}
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
function remove_user(){
	if(localStorage.getItem("username")){
		var p = document.createElement("p");
		p.innerText = "Your username has been removed. Reload the page to see the changes.";
		p.style.textAlign = "center";
		p.style.color = "green";
		document.body.appendChild(p);
		localStorage.removeItem("username");
	}else{
		var p = document.createElement("p");
		var a = document.createElement("a");
		p.innerText = "Username not found";
		p.style.color = "red";
		p.style.textAlign = "center";
		a.innerText = "Create a username";
		a.href = "javascript:add_user()";
		document.body.appendChild(p);
		document.body.appendChild(a);
	}
}
