var timesVisited = 1;
if(!localStorage.getItem("timesvisted")){
  localStorage.setItem("timesvisited", timesVisited);
}else{
 timesVisited+=1;
 alert("You visited this page " + localStorage.getItem("timesvisited") + " times");
}
