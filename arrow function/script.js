// syntax 

let tanya = () => {
 console.log("no one is perfect, we tend to become one");
};
// first we declare a normal variable and then we pass the parameter in () and then finally we pass "=>", which makes it a arrow function
 
tanya();

// and lastly we call the variable like we did in function

let college = ( val1,val2) => {
    let result =  val1 + val2;
    return result;
}

let final = college("beautiful","place");
console.log(final);
