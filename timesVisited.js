var timesVisited = 1;
if(!localStorage.getItem("timesvisted")){
  localStorage.setItem("timesvisited", timesVisited);
}else{
 timesVisited+=1;
}
