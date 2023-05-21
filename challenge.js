function right(){
  var h1 = document.getElementById("h1");
  h1.innerText = "Correct! Click me to go to the next challenge you want to try.";
  h1.style.color = "green";
  h1.addEventListener("click", function(){
    h1.style.display = "none";
    var nextChallenge = prompt("Enter the next challenge you want to try > ");
    if(nextChallenge != ""){
      window.location.assign("https://pytutorials.github.io/challenges/" + nextChallenge);
    }else{
       nextChallenge = prompt("Enter the next challenge you want to try > ");
       window.location.assign("https://pytutorials.github.io/challenges/" + nextChallenge);
    }
  })
}

function wrong(){
  var h1 = document.getElementById("h1");
  h1.innerText = "Try Again. Click me to undisplay.";
  h1.style.color = "red";
  h1.addEventListener("click", function(){
    h1.innerText = "";
  })
}
document.getElementById("other_challenges").addEventListener("click", function(){
  document.getElementById("challenges").style.display = "block";
});
