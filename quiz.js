var answers_correct = 0;
var answers_wrong = 0;
if(answers_wrong == 3){
   alert("Try again next time!");
   window.location.assign("https://pytutorials.github.io/");
}
function checkbox_checked(){
  let ans = document.querySelector("input[id=check]:checked");
  try{
    if(!ans){
      throw "Check a checkbox!";
    }else{
      check_answer();
    }
  }catch(e){
     var h1 = document.createElement("h1");
      h1.innerText = e;
      document.body.appendChild(h1);
  }
}
function check_answer(){
    let ans = document.querySelector("input[name=check]:checked");
    if (ans.value != 4) {
      var h1 = document.createElement("h1");
      h1.innerText = "Try Again!";
      h1.id = "header";
      document.body.appendChild(h1);
      answers_wrong += answers_wrong+1;
    }
    if (ans.value == 4) {
      var h1 = document.createElement("h1");
       h1.innerText = "Correct!";
       h1.id = "header";
       document.body.appendChild(h1);
       answers_correct = answers_correct+1;
    }
}
