
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/multiplayer");


exampleSocket.onopen = (event) => {
    exampleSocket.send("server connected");
 };

exampleSocket.onmessage = (event) => {
    console.log(event.data);
};



