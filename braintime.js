
var tiles = document.getElementsByClassName("tile");
tiles.forEach = Array.prototype.forEach; // why isnt `forEach` already defined on this object
tiles.forEach(function(tile, i){
    tile.addEventListener("click", processSelection);
});

/** Grabs the numbers on the tiles and returns them **/
function getNumbers(){
    var numbers = [];
    tiles.forEach(function(tile){
        numbers.push(parseInt(tile.innerHTML))
    });
    return numbers;
}

/**
* Make new numbers. Numbers should be three digits and not have duplicates.
*/
function generateTileNumbers(){
    var numbers = [];
    numbers = [].map.call(tiles, function(){
        return getRandomInt(100, 1000);
    });
    return numbers;
}


function updateTiles() {
    // new numbers
    numbers = generateTileNumbers();

    tiles.forEach(function(tile, i){
        tile.innerHTML = numbers[i];
    });
}

function processSelection(e) {
    var selectedNumber = parseInt(e.target.innerHTML);
    var numbers = getNumbers();
    var isCorrect = (selectedNumber == max(numbers))

    if(isCorrect){
        document.getElementById('status').innerHTML = "Correct!";
    } else {
        document.getElementById('status').innerHTML = "Wrong!";
    }
    console.log(selectedNumber);

    updateTiles();
}


/** Utilities **/

/* Return the maximum number in a list */
function max(list) {
    return list.sort()[list.length - 1];
}

/* get a random int */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
