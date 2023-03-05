// IN this challenge we have to count the numbers from 1- 100 and the mutiple of 3 should say "fizz" instead of that number
// and multiple of 5 should say "buzz" and the multiple of noth 3 and 5 should say "fizzbuzz".

var output = [];
var count =1;

function fizzbuzz(){

    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
    }else if (count % 3 === 0){
        output.push("fizz");    
    } else if ( count % 5 ===0){
        output.push("Buzz");
    }else {
        output.push(count);
    }

    // count = count + 1  
    count ++;
console.log(output);

}

fizzbuzz();
