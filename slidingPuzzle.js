//some type of object(hash?) holding values of tiles --done
//need to know where empty space is
//need to know which tile is clicked -- done
//  check if tile is next to opening
//    if open is next to it, move tile
    //making sure clicked target is the right one
document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    var tiles = Array.from(document.querySelectorAll('.tile'));
    console.log(tiles)
    // building hash of 'virtual' board
    var rows = {
        one: [1, 2, 3],
        two: [4, 5, 6],
        three: [7, 8 , 0]
    };
    //built coordinates for starting grid
    var location = {
        1: {
            position: 1,
            top: '10',
            left: '10',
        },
        2: {
            position: 2,
            top: '10',
            left: '80',
        },
        3: {
            position: 3,
            top: '10',
            left: '150',
        },
        4: {
            position: 4,
            top: '80',
            left: '10',

        },
        5: {
            position: 5,
            top: '80',
            left: '80',

        },
        6: {
            position: 6,
            top: '80',
            left: '150',

        },
        7: {
            position: 7,
            top: '150',
            left: '10',

        },
        8: {
            position: 8,
            top: '150',
            left: '80',

        },
        //empty initial coords
        empty: {
            position: 9,
            top: '150',
            left: '150'
        }
    };
    setUp();
    // Adding event listener for clicked tiles and grid location
    function setUp() {
        // var tiles = Array.from(document.querySelectorAll('.tile'));
        tiles.forEach(function(tile, i) {
            tile.addEventListener('click', clickedTile);
            tile.style.top = location[i + 1].top + "px";
            tile.style.left = location[i + 1].left + "px";
            // location[i + 1]["total"] = (Number(location[i + 1]["top"]) + Number(location[i + 1]["left"]))
        });
    };
    //grabbing clicked tile
    function clickedTile(e) {
        var targetTile = e.srcElement;
        moveTile();
        // var targetTotal = (Number(location[targetTile]["top"]) + Number(location[targetTile]["left"]));
        // var emptyTotal = location["empty"]["top"] = location["empty"]["left"];
        function checkAdjacent() {
            //check if opening is touching
            return true
        };
        function moveTile() {
            if (checkAdjacent()) {
                var hold = {
                    position: location[targetTile.innerHTML]["position"],
                    top: location[targetTile.innerHTML]["top"],
                    left: location[targetTile.innerHTML]["left"]
                };
                targetTile.style.top = location["empty"]["top"] + "px";
                targetTile.style.left = location["empty"]["left"] + "px";
                location[targetTile.innerHTML]["position"] = location["empty"]["position"];
                location[targetTile.innerHTML]["top"] = location["empty"]["top"];
                location[targetTile.innerHTML]["left"] = location["empty"]["left"];
                location["empty"]["position"] = hold["position"]
                location["empty"]["top"] = hold["top"];
                location["empty"]["left"] = hold["left"];
            } else {
                console.log("Can't move that tile");
                return;

            };
        };
    };

};

















