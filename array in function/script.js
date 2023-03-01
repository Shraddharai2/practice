// arguments in function

function sum(arr){
    let sum = 0;
    for(let i=0 ; i < arr.length; i ++){
        sum = sum + arr[i];
    }
     return sum;
}
 let sumarray = [1,2,3,4,5,6,7,8];
 let arrresult = sum(sumarray);
 console.log(arrresult);




//  when we don't pass and arguments then -

function me(){
    let sum = 0;
    // when we don't pass any arguments then system by default take it as arguments
    for(let i = 0; i< arguments.length; i ++){
        sum = sum + arguments[i];
    } 
    return sum;
}

console.log (me(7,8,9,10,11,12,13,14,15));