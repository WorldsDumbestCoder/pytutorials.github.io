function search(){
  var searchValue = document.getElementById("search").value;
  var regex = /<[/!]?[a-zA-Z]+.*?>/g;
  if(regex.test){
    alert("You cannot add HTML Code!");
    document.write("You are now banned!");
    localStorage.setItem("banned", true);
}
