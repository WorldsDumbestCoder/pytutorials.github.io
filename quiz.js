var answers_correct = 0;
function increase_correct(){
  return answers_correct+1;
}
function check_answer(){
  try{
    let ans = document.querySelector("input[name=check]:checked");
    if (ans.value != 4) {
      var h1 = document.createElement("h1");
      h1.innerText = "Try Again!";
      h1.id = "header";
      document.body.appendChild(h1);
    }catch(err){
        document.write("An unexpected error happened while reciving your answers. " + err);
  }
  if (ans.value == 4) {
    try{
      var h1 = document.createElement("h1");
       h1.innerText = "Correct!";
       h1.id = "header";
       document.body.appendChild(h1);
    }catch(err){
       document.write("An unexpected error happend while reciving your answers. " + err)
    }
  }
}
