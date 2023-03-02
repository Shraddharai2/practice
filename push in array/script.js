// here we are pushing the values of one variable into the other variable


let fruit = ['Apple','Bada Apple', 'Chota Apple', 'Double Apple'];
let Upperfruit = ['Shraddha','Simrat','Livinaa'];

for( let x of fruit){
    Upperfruit.push(x.toUpperCase());
}
console.log(Upperfruit);


