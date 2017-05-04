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
            var edges = false
            //compare clcked tile with placement of empty tile plus
            if (location[targetTile.innerHTML]["position"] == 6 || location[targetTile.innerHTML]["position"] == 3 || location[targetTile.innerHTML]["position"] == 7 || location[targetTile.innerHTML]["position"] == 4) {
                var edges = true
            };
            if (location[targetTile.innerHTML]["position"] == Number(location["empty"]["position"]) + 1
                || location[targetTile.innerHTML]["position"] == Number(location["empty"]["position"]) + 3
                || location[targetTile.innerHTML]["position"] == Number(location["empty"]["position"]) - 1
                || location[targetTile.innerHTML]["position"] == Number(location["empty"]["position"]) - 3 && !edges) {
                return true;
            } if else (edges) {

            }
        }
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
                console.log(location["empty"]["position"])
                console.log(location[targetTile.innerHTML]["position"])
            } else {
                alert("Can't move that tile");
            };
        };
    };
};

















