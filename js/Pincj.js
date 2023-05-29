var element = document.getElementById('elemento');
    var initialDistance = 0;
    var initialScale = 1;
    var initialX = 0;
    var initialY = 0;

    // Función para calcular la distancia entre los primeros dos puntos de contacto
    function calculateDistance(touches) {
      var x1 = touches[0].clientX;
      var y1 = touches[0].clientY;
      var x2 = touches[1].clientX;
      var y2 = touches[1].clientY;

      return Math.hypot(x2 - x1, y2 - y1);
    }

    // Función para manejar el evento touchstart
    function touchstartHandler(event) {
      if (event.touches.length === 2) {
        initialDistance = calculateDistance(event.touches);
        initialScale = parseFloat(element.style.transform.replace('scale(', '')) || 1;
        initialX = event.touches[0].clientX - element.offsetLeft;
        initialY = event.touches[0].clientY - element.offsetTop;
      }
    }

    // Función para manejar el evento touchmove
    function touchmoveHandler(event) {
      event.preventDefault(); // Evita el desplazamiento de la página en dispositivos táctiles

      if (event.touches.length === 2) {
        var currentDistance = calculateDistance(event.touches);
        var scale = (currentDistance / initialDistance) * initialScale;
        element.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
        
        var currentX = event.touches[0].clientX - initialX;
        var currentY = event.touches[0].clientY - initialY;
        element.style.left = currentX + 'px';
        element.style.top = currentY + 'px';
      }
    }

    // Función para manejar el evento touchend
    function touchendHandler(event) {
      if (event.touches.length < 2) {
        initialDistance = 0;
        initialScale = 1;
      }
    }

    element.addEventListener('touchstart', touchstartHandler, false);
    element.addEventListener('touchmove', touchmoveHandler, false);
    element.addEventListener('touchend', touchendHandler, false);