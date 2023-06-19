let timesVisited = 1;
if(!localStorage.getItem("timesvisited")){
  localStorage.setItem("timesvisited", timesVisited);
  alert("You visited " + localStorage.getItem("timesvisited")+ " time(s)");
}else{
 timesVisited+=1;
 alert("You visited this page " + localStorage.getItem("timesvisited") + " times");
}
