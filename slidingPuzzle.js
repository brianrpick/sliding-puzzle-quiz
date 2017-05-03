//some type of object(hash?) holding values of tiles
//need to know where empty space is
//need to know which tile is clicked
//  check if tile is next to opening
//    if open is next to it, move tile


// Adding event listner for clicked tiles
function findTile() {
    var tiles = Array.from(document.querySelectorAll('.tile'));
    tiles.forEach(tile => tile.addEventListener('click', clickedTile));
}
//making sure clicked target is the right now
function clickedTile(e) {
    console.log(e.target || e.srcElement)
}
window.onload = findTile;
