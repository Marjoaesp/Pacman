
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/echo");


exampleSocket.onopen = (event) => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
 };

exampleSocket.onmessage = (event) => {
    console.log(event.data);
};

  