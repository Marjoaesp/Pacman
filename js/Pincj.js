var element = document.getElementById('elemento'); // Reemplaza 'elemento' con el ID del elemento en tu HTML
var initialDistance = 0;
var initialScale = 1;

// Función para calcular la distancia entre los primeros dos puntos de contacto
function calculateDistance(touches) {
  var x1 = touches[0].pageX;
  var y1 = touches[0].pageY;
  var x2 = touches[1].pageX;
  var y2 = touches[1].pageY;

  return Math.hypot(x2 - x1, y2 - y1);
}

// Función para manejar el evento touchstart
function touchstartHandler(event) {
  if (event.touches.length === 2) {
    initialDistance = calculateDistance(event.touches);
    initialScale = parseFloat(element.style.transform.replace('scale(', '')) || 1;
  }
}

// Función para manejar el evento touchmove
function touchmoveHandler(event) {
  if (event.touches.length === 2) {
    var currentDistance = calculateDistance(event.touches);
    var scale = (currentDistance / initialDistance) * initialScale;
    element.style.transform = 'scale(' + scale + ')';
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