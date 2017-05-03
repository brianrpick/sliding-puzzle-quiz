//some type of object(hash?) holding values of tiles
//need to know where empty space is
//need to know which tile is clicked -- done
//  check if tile is next to opening
//    if open is next to it, move tile
    //making sure clicked target is the right one
document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    var targetTile = [];
    var emptyAdjacent = true;
    var startingSpot = [
        tile1 = {
            position: 1,
            top: '0',
            left: '0'
        },
        tile2 = {
            position: 1,
            top: '0',
            left: '230'
        },
        tile3 = {
            position: 1,
            top: '0',
            left: '460'
        },
        tile4 = {
            position: 1,
            top: '230',
            left: '0'
        },
        tile5 = {
            position: 1,
            top: '230',
            left: '230'
        },
        tile6 = {
            position: 1,
            top: '230',
            left: '460'
        },
        tile7 = {
            position: 1,
            top: '460',
            left: '0'
        },
        tile8 = {
            position: 1,
            top: '460',
            left: '230'
        },
        empty = {
            position: 1,
            top: '460',
            left: '460'
        },
    ];
    tileListener();
    // Adding event listener for clicked tiles
    function tileListener() {
        var tiles = Array.from(document.querySelectorAll('.tile'));
        tiles.forEach(tile => tile.addEventListener('click', clickedTile));
        //grabbing clicked tile
        function clickedTile(e) {
            var targetTile = e.srcElement;
        };
    };
}

