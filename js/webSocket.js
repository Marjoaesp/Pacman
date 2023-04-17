
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/echo");


exampleSocket.onopen = (event) => {
    exampleSocket.send("server connected");
 };

exampleSocket.onmessage = (event) => {
    console.log(event.data);
};



