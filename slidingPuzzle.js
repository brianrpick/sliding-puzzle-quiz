//some type of object(hash?) holding values of tiles --done
//need to know where empty space is
//need to know which tile is clicked -- done
//  check if tile is next to opening
//    if open is next to it
//      move tile-- done
document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    var tiles = Array.from(document.querySelectorAll('.tile'));
    //coordinates for starting grid
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
        tiles.forEach(function(tile, i) {
            tile.addEventListener('click', clickEvent);
            tile.style.top = location[i + 1].top + "px";
            tile.style.left = location[i + 1].left + "px";
        });
    };
    //grabbing clicked tile
    function clickEvent(e) {
        var targetTile = e.srcElement;
        moveTile();
        function checkAdjacent() {
            var leftEdge = false
            var rightEdge = false
            //check if clicked tile is on edge
            if (Number(location[targetTile.innerHTML]["position"]) == 6 || Number(location[targetTile.innerHTML]["position"]) == 3) {
                rightEdge = true;
            } else if (Number(location[targetTile.innerHTML]["position"]) == 7 || Number(location[targetTile.innerHTML]["position"]) == 4) {
                leftEdge = true;
            };
                //cant move tile is on left side and empty spot is one position left
            if (leftEdge && location["empty"]["position"] == Number(location[targetTile.innerHTML]["position"]) - 1
                //cant move tile if on right side and empty spot is one position right
                || rightEdge && location["empty"]["position"] == Number(location[targetTile.innerHTML]["position"]) + 1) {
                return false;
                //move if directly above, below, left or right
            } else if (location["empty"]["position"] == Number(location[targetTile.innerHTML]["position"]) + 3
                || location["empty"]["position"] == Number(location[targetTile.innerHTML]["position"]) - 3
                || location["empty"]["position"] == Number(location[targetTile.innerHTML]["position"]) + 1
                || location["empty"]["position"] == Number(location[targetTile.innerHTML]["position"]) - 1) {
                return true;
            } else {
                return false;
            };
        };
        function moveTile() {
            if (checkAdjacent()) {
                //holder to adjust location hash
                var hold = {
                    position: location[targetTile.innerHTML]["position"],
                    top: location[targetTile.innerHTML]["top"],
                    left: location[targetTile.innerHTML]["left"]
                };
                //swapping placement of clicked tile(holder) and empty position
                targetTile.style.top = location["empty"]["top"] + "px";
                targetTile.style.left = location["empty"]["left"] + "px";
                location[targetTile.innerHTML]["position"] = location["empty"]["position"];
                location[targetTile.innerHTML]["top"] = location["empty"]["top"];
                location[targetTile.innerHTML]["left"] = location["empty"]["left"];
                location["empty"]["position"] = hold["position"]
                location["empty"]["top"] = hold["top"];
                location["empty"]["left"] = hold["left"];
            } else {
                alert("Can't move that tile");
            };
        };
    };
};

















