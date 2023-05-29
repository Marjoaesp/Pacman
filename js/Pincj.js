if ('ontouchstart' in window || navigator.maxTouchPoints) {
    var pinchElement = document.getElementById('contenedor');
    var circleElement = document.getElementById('circle');
  
    var initialDistance = 0;
    var initialScale = 1;
  
    function handlePinch(event) {
      if (event.touches.length >= 2) {
        var touch1 = event.touches[0];
        var touch2 = event.touches[1];
        var distance = Math.hypot(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);
  
        if (initialDistance === 0) {
          initialDistance = distance;
          circleElement.style.transform = 'translate(-50%, -50%) scale(1)';
        }
  
        var scale = 1 + (distance - initialDistance) / 100;
        circleElement.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
      }
    }
  
    function handleRelease(event) {
      if (event.touches.length === 0) {
        initialDistance = 0;
        circleElement.style.transform = 'translate(-50%, -50%) scale(0)';
      }
    }
  
    pinchElement.addEventListener('touchmove', handlePinch);
    pinchElement.addEventListener('touchend', handleRelease);
  }