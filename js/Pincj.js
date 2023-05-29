document.addEventListener('DOMContentLoaded', function() {
   // Verificar si el dispositivo móvil es compatible con eventos táctiles
    // Obtener el elemento en el que deseas detectar el gesto de "pinch"
    var pinchElement = document.getElementById('#elemento');
  
    // Variables para almacenar la escala y el estado inicial
    var initialDistance = 0;
    var initialScale = 1;
  
    // Función para manejar el evento de "pinch"
    function handlePinch(event) {
      // Verificar que haya al menos dos dedos en el evento táctil
      if (event.touches.length >= 2) {
        // Obtener las coordenadas de los dos primeros dedos
        var touch1 = event.touches[0];
        var touch2 = event.touches[1];
  
        // Calcular la distancia actual entre los dos dedos
        var distance = Math.hypot(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);
  
        // Si es la primera vez que se realiza el gesto de "pinch", almacenar la distancia y escala inicial
        if (initialDistance === 0) {
          initialDistance = distance;
          initialScale = parseFloat(pinchElement.style.transform.replace('scale(', '').replace(')', ''));
        }
  
        // Calcular la escala actual basada en la distancia actual y la distancia inicial
        var scale = initialScale * (distance / initialDistance);
  
        // Aplicar la escala al elemento
        pinchElement.style.transform = 'scale(' + scale + ')';
      }
    }
  
    // Agregar el evento de "pinch" al elemento
    pinchElement.addEventListener('touchmove', handlePinch);

  });

