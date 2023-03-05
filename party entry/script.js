// Here we are going to code for the names of people those who are allowed in the party and for those who are not allowed for the  party

var guestList = ["ankush" , "Shraddha" , "Simrat" , "Neeraj" , " Livinaa" , "Divyaaman" , "Divya"];
var GuestNAme= prompt("Write Your Name Here");

if(guestList.includes(GuestNAme)){
    alert("welcome");
}else{
    alert("Sorry you are not allowed,Better Luck Next Time");
}
// This code will run good if you run it on browser