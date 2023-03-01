// string in function

function URL(url,domain){
    let con = "https://";
    let result = con + url + domain;
    return result;
}

let add = URL("anuragtiwari", ".me");
console.log(add);