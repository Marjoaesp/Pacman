
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/multiplayer");

exampleSocket.onopen = (event) => {

    exampleSocket.send("server connected");
    const time = new Date();

	exampleSocket.send(JSON.stringify(localStorage.getItem("player")));


 };

 function sendText(){  

    const msg = {
      juego: "pacmar",
      event: "highscore",
      value: 1,
      player: "martin",
    };
    console.log(msg)
    webSocket.send(JSON.stringify(msg));
    
    console.log("llego acá");
    
  }

exampleSocket.onmessage = (event) => {
    console.log(event.data);
};




