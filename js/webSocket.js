
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/multiplayer");

exampleSocket.onopen = (event) => {

    exampleSocket.send("server connected");
    const time = new Date();

	exampleSocket.send(JSON.stringify(localStorage.getItem("player")));


 };



exampleSocket.onmessage = (event) => {
    console.log(event.data);
};




