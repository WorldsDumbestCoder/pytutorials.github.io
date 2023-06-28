function add_user(){
	if(!localStorage.getItem("username")){
		var user = prompt("Create your username: ");
		if(!user == null){
			localStorage.setItem("username", user);
			var p = document.createElement("p");
			p.style.color = "green";
			p.style.textAlign = "center";
			p.innerText = "Your username has been created";
			document.body.appendChild(p);
		}else{
			var p = document.createElement("p");
			p.innerText = "Failed to create username!";
			p.style.textAlign = "center";
			document.body.appendChild(p);
		}
	}else{
		var p = document.createElement("p");
		var a = document.createElement("a");
		p.innerText = "Username already created."
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
	if(username == ""){
		var mes = document.createElement("p");
		mes.innerText = "Username cannot be empty!";
		mes.style.textAlign = "center";
		mes.style.color = "green";
		document.body.appendChild(mes);
	}else{
		if(!username == null){
			localStorage.removeItem("username");
			localStorage.setItem("username", username);
		}else{
			localStorage.setItem("username", prompt("Failed to create username. Enter username again: "));
			var mes = document.createElement("p");
			mes.innerText = "Your username has been saved as " + localStorage.getItem("username");
			mes.style.color = "green";
			mes.style.textAlign = "center";
			document.body.appendChild(mes);
		}
	}
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
function popup_username(){
	var show_user = prompt("Popup username on onload (true/false) ");
	if(show_user == true){
		if(!localStorage.getItem("!username")){
			var changesSaved = document.createElement("p");
			changesSaved.innerText = "This is already set";
			changesSaved.style.color = "red";
			changesSaved.style.textAlign = "center";
			document.body.appendChild(changesSaved);
		}else{
			var setChanges = document.createElement("p");
			setChanges.innerText = "Changes saved";
			setChanges.style.color = "green";
			setChanges.style.textAlign = "center";
			document.body.appendChild(changesSaved);
			localStorage.removeItem("!username");
		}
	}else{
		if(!localStorage.getItem("!username")){
			localStorage.setItem("!username", show_user);
			var setChanges = document.createElement("p");
			setChanges.innerText = "Changes saved";
			setChanges.style.color = "green";
			setChanges.style.textAlign = "center";
			document.body.appendChild(setChanges);
			localStorage.setItem("!username", show_user);
		}else{
			var changesSet = document.createElement("p");
			changesSet.innerText = "This is already set";
			changesSet.style.color = "red";
		        changesSet.textAlign = "center";
			document.body.appendChild(changesSet);
		}
	}
}	
