// Create a code of random people name where in who's name will pop up will have to pay the lunch cost.

function whosPaying(names)

{

 

return names[Math.floor(Math.random()*names.length)] + " is going to buy lunch today";

     

}



var names = ["Marina" , "Sam" , "Sergio" ,"Lara" , "Tod" , "Rod"];

console.log(whosPaying(names));