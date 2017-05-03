//some type of object(hash?) holding values of tiles
//need to know where empty space is
//need to know which tile is clicked -- done
//  check if tile is next to opening
//    if open is next to it, move tile
    //making sure clicked target is the right one


// function initialize() {
    var targetTile = [];
    var emptyAdjacent = true;

    // Adding event listener for clicked tiles
    function tileListener() {
        var tiles = Array.from(document.querySelectorAll('.tile'));
        tiles.forEach(tile => tile.addEventListener('click', clickedTile));
        //grabbing clicked tile
        function clickedTile(e) {
            var targetTile = e.srcElement;
            if (emptyAdjacent = true){
                //adding id to make invisible
                targetTile.setAttribute("id", "down")
            };
        };
    };



// }
window.onload = tileListener;
