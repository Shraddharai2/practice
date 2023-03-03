let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"];



let heropower = {
    thor: "hammer",
    spiderman: " sling"

    getspiderpower: function(){
        console.log(`Spidy power is $(this.spiderman)`);

    }
}

Object.Prototype.hitesh = function (){
    console.log(`Hitesh is present in all objects`);

}

myHeros.hitesh()