if(answers_wrong == 3){
   alert("Try again next time!");
   window.location.assign("https://pytutorials.github.io/");
}
function checkbox_checked(){
  let ans = document.querySelector("input[name=check]:checked");
  try{
    if(!ans){
      throw "Check all the boxes!";
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
   let ans = document.querySelector('input[name=check]:checked');
   if (ans.value != 4) {
      var p = document.createElement("p");
      p.innerText = "Answers Correct/Wrong: " + answers_wrong + " /Correct: " + answers_correct;
      document.body.appendChild(p);
      answers_wrong = answers_wrong+1;
      var calc = answers_correct/4;
      var calcTimesHund = calc*100;
      if(calcTimesHund < 50){
         alert("You failed this quiz!");
         document.write("you got " + calcTimesHund + "%");
      }else{
         alert("Good Job! YOU PASSED THIS QUIZ!");
         document.write("you got " + calcTimesHund + "%");
      }
   }
   if (ans.value == 4) {
      var h1 = document.createElement("h1")
      h1.innerText = "Correct!";
      document.body.appendChild(h1);
      answers_correct = answers_correct+1;
   }
}
