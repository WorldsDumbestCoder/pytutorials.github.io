var answers_correct = 0;
function increase_correct(){
  return answers_correct+1;
}
function check_answer(){
    let ans = document.querySelector("input[name=check]:checked");
    if(ans.value == ""){
       try{
          throw "Enter a value!";
       }catch(err){
         var h1 = document.createElement("h1");
         h1.innerText = err;
         document.body.appendChild(h1);
       }
    }
    if (ans.value != 4) {
      var h1 = document.createElement("h1");
      h1.innerText = "Try Again!";
      h1.id = "header";
      document.body.appendChild(h1);
    }
    if (ans.value == 4) {
      var h1 = document.createElement("h1");
       h1.innerText = "Correct!";
       h1.id = "header";
       document.body.appendChild(h1);
    }
}
