function beer(){

    let beerafter = 100;
    let beerbefore = 99;

    while(beerafter >= 1) {

if (beerbefore > 1){
    console.log(beerbefore + " Bottles of beer on the wall " + beerbefore + " Bottles of beer.Take 1 down, pass it around  " + beerafter + "  Bottles of beer on the Wall");
}
else{
    console.log(beerbefore + " bottle of beer on the wall, " + beerbefore + " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall");
}
 

beerafter--;
beerbefore--;
   

}
}

beer()

