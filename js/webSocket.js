
const exampleSocket = new WebSocket("wss://ucpgames-api.azurewebsites.net/echo");


exampleSocket.onopen = (event) => {

    exampleSocket.send("server connected");
    const time = new Date();
	let playerSocket=JSON.parse(localStorage.getItem("player"))

	exampleSocket.send(JSON.stringify(playerSocket));
	console.log(event.data);

    console.log(time, "Highscore: " + Highscore)

 };



exampleSocket.onmessage = (event) => {
    console.log(event.data);
};




