let timesVisited = 1;
if(!localStorage.getItem("timesvisited")){
  localStorage.setItem("timesvisited", timesVisited);
  alert("You visited " + localStorage.getItem("timesvisited")+ " time(s)");
}else{
 timesVisited = parseInt(localStorage.getItem("timesvisited"))+1;//Change timesVisited into an intenger than increase the amount of times visited.
 localStorage.setItem("timesvisited", timesVisited);//set The times visited
 alert("You visited this page " + localStorage.getItem("timesvisited") + " times");//output the times visited.
 if(timesVisited > 100 || timesVisited == 100){
   alert("Thank You for visiting our page " + localStorage.getItem("timesvisited"));
}
