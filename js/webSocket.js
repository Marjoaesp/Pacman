
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/multiplayer");


exampleSocket.onopen = (event) => {

    exampleSocket.send("server connected");
    const time = new Date();
	let playerSocket=JSON.parse(localStorage.getItem("player"))

	exampleSocket.send(JSON.stringify(playerSocket));
	console.log(time, "Highscore: " + event.data);


 };



exampleSocket.onmessage = (event) => {
    console.log(event.data);
};




