function check_answer(){
  var ans = document.getElementById("answer");
  if(ans.value != 4){
    var h1 = document.createElement("h1");
    h1.innerText = "Try Again!";
    document.body.appendChild(h1);
  }
  if(ans.value == 4){
    var h1 = document.createElement("h1");
    h1.innerText = "Correct!";
    document.body.appendChild(h1);
  }  
}

