// for in

let space = {
    firstname: 'Shraddha',
    lastname: 'Rai',
    role: ' admin',
    loginCount : 25,
}

for(let x in space ){
    console.log(x);
}

// this will print all the keys

for(let x in space){
    console.log(space[x]);
}

// this will bring all the values as well