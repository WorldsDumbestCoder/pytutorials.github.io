var answers_correct;
function check_answer(){
  let ans = document.querySelector("input[name=check]:checked");
  if (ans.value != 4) {
    var h1 = document.createElement("h1");
    h1.innerText = "Try Again!";
    document.body.appendChild(h1);
  }
  if (ans.value == 4) {
    var h1 = document.createElement("h1");
    h1.innerText = "Correct!";
    document.body.appendChild(h1);
    answers_correct+=1
  }
}
