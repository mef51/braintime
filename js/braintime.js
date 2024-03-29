var Utils = window.Utils = window.Utils || {};
var Braintime = window.Braintime = window.Braintime || {};

/** Utilities **/
/* Return the maximum number in a list */
Utils.max = function(list) {
	return list.sort()[list.length - 1];
}

/* get a random int */
Utils.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

Utils.computeDurations = function(times){
	var durations = [];
	for(var i = 1; i < times.length; i++){
		durations.push(times[i] - times[i-1]);
	}
	return durations;
}

/*******************************/

/** Grabs the numbers on the tiles and returns them **/
Braintime.getNumbers = function(){
	var numbers = [];
	Braintime.tiles.forEach(function(tile){
		numbers.push(parseInt(tile.innerHTML))
	});
	return numbers;
}

/**
* Makes new numbers. Numbers should be three digits and not have duplicates.
*/
Braintime.generateTileNumbers = function(){
	var numbers = [];
	for(var i = 0; i < Braintime.tiles.length; i++){
		var newVal = Utils.getRandomInt(100, 1000);
		// make sure there's no duplicates
		while(numbers.indexOf(newVal) != -1){
			newVal = Utils.getRandomInt(100, 1000);
		}
		numbers.push(newVal);
	}
	return numbers;
}

/**
* Puts new numbers on the tiles
*/
Braintime.updateTiles = function() {
	// new numbers
	numbers = Braintime.generateTileNumbers();

	Braintime.tiles.forEach(function(tile, i){
		tile.innerHTML = numbers[i];
	});
}

/**
* Check if a selection was right or wrong
*/
Braintime.processSelection = function(e) {
	var selectedNumber = parseInt(e.target.innerHTML);
	var numbers = Braintime.getNumbers();
	var isCorrect = (selectedNumber == Utils.max(numbers));

	Braintime.timeStamps.push(e.timeStamp);

	if(isCorrect){
		document.getElementById('status').innerHTML = "Correct!";
	} else {
		document.getElementById('status').innerHTML = "Wrong!";
	}

	Braintime.updateTiles();
	durations = Utils.computeDurations(Braintime.timeStamps);
	console.log(durations[durations.length - 1], isCorrect);
}

/**
* Setup the game
*/
Braintime.initialize = function(duration){
	// timestamps of click events. the first timestamp is the timestamp of the load event.
	Braintime.timeStamps = [Date.now()];

	var gameTilesSelector = "game tile"; // these are class names
	Braintime.tiles = document.getElementsByClassName(gameTilesSelector);
	Braintime.tiles.forEach = Array.prototype.forEach; // why isnt `forEach` already defined on this object
	Braintime.tiles.forEach(function(tile, i){
		tile.addEventListener("click", Braintime.processSelection);
	});
	console.log("Game started!");
}

/**
* Start the game!
*/
Braintime.start = function() {

}
