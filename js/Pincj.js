document.addEventListener('touchstart', start, false);
document.addEventListener('touchmove', move, false);
var dist1=0;
function start(ev) {
if (ev.targetTouches.length == 2) {//check if two fingers touched screen
dist1 = Math.hypot( //get rough estimate of distance between two fingers
ev.touches[0].pageX - ev.touches[1].pageX,
ev.touches[0].pageY - ev.touches[1].pageY);
}

}
function move(ev) {
if (ev.targetTouches.length == 2 && ev.changedTouches.length == 2) {
// Check if the two target touches are the same ones that started
var dist2 = Math.hypot(//get rough estimate of new distance between fingers
ev.touches[0].pageX - ev.touches[1].pageX,
ev.touches[0].pageY - ev.touches[1].pageY);
//alert(dist);
if(dist1>dist2) {//if fingers are closer now than when they first touched screen, they are pinching
alert('zoom out');
    resumeGame();
}
if(dist1<dist2) {//if fingers are further apart than when they first touched the screen, they are making the zoomin gesture
            pauseGame();
            alert('zoom in');
        }
    }

}
