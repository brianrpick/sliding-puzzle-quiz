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
    //built coordinates for starting grid
    var startingSpots = {
        1: {
            position: 1,
            top: '10',
            left: '10'
        },
        2: {
            position: 2,
            top: '10',
            left: '80'
        },
        3: {
            position: 3,
            top: '10',
            left: '150'
        },
        4: {
            position: 4,
            top: '80',
            left: '10'
        },
        5: {
            position: 5,
            top: '80',
            left: '80'
        },
        6: {
            position: 6,
            top: '80',
            left: '150'
        },
        7: {
            position: 8,
            top: '150',
            left: '10'
        },
        8: {
            position: 7,
            top: '150',
            left: '80'
        },
        //holding empty coordinate
        empty: {
            position: 1,
            top: '150',
            left: '150'
        },
    };
    tileSetup();
    // Adding event listener for clicked tiles and gird location
    function tileSetup() {
        var tiles = Array.from(document.querySelectorAll('.tile'));
        tiles.forEach(function(tile, i) {
            console.log(i)
            tile.addEventListener('click', clickedTile);
            tile.style.top = startingSpots[i + 1].top + "px";
            tile.style.left = startingSpots[i + 1].left + "px";
        });
    };
        //grabbing clicked tile
    function clickedTile(e) {
        var targetTile = e.srcElement;
        console.log(e.srcElement)
    };
}

