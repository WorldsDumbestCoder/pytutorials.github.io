let timesVisited = 1;
if(!localStorage.getItem("timesvisited")){
  localStorage.setItem("timesvisited", timesVisited);
  alert("You visited " + localStorage.getItem("timesvisited")+ " time(s)");
}else{
 timesVisited = parseInt(localStorage.getItem("timesvisited"))+1;
 localStorage.setItem("timesvisited", timesVisited);
 alert("You visited this page " + localStorage.getItem("timesvisited") + " times");
}
