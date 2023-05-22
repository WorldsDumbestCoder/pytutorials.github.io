var answers_correct = 0;
function increase_correct(){
  return answers_correct+1;
}
function check_answer(){
  let ans = document.querySelector("input[name=check]:checked");
  if (ans.value != 4) {
    var h1 = document.createElement("h1");
    h1.innerText = "Try Again!";
    document.body.appendChild(h1);
  }
  if (ans.value == 4) {
    var h1 = document.createElement("h1");
    h1.innerText = "Correct! Click me to get rid of this";
    document.body.appendChild(h1);
 }
}
var header = document.getElementById("header");
header.addEventListener("click", function(){
  header.innerText = "";
});
