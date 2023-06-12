node.addEventListener('gestureend', function(e) {
    if (e.scale < 1.0) {
        resumePacman();
    } else if (e.scale > 1.0) {
        pausePacman();
    }
}, false);


