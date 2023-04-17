
const exampleSocket = new WebSocket("wss://www.example.com/socketPacman");
exampleSocket.send("Here's some text that the server is urgently awaiting!");

  
exampleSocket.onopen = (event) => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
  };
  
  function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  const msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}


exampleSocket.onmessage = (event) => {
    console.log(event.data);
  };


  exampleSocket.onmessage = (event) => {
    const f = document.getElementById("chatbox").contentDocument;
    let text = "";
    const msg = JSON.parse(event.data);
    const time = new Date(msg.date);
    const timeStr = time.toLocaleTimeString();
  
    switch (msg.type) {
      case "id":
        clientID = msg.id;
        setUsername();
        break;
      case "username":
        text = `User <em>${msg.name}</em> signed in at ${timeStr}<br>`;
        break;
      case "message":
        text = `(${timeStr}) ${msg.name} : ${msg.text} <br>`;
        break;
      case "rejectusername":
        text = `Your username has been set to <em>${msg.name}</em> because the name you chose is in use.<br>`;
        break;
      case "userlist":
        document.getElementById("userlistbox").innerHTML = msg.users.join("<br>");
        break;
    }
  
    if (text.length) {
      f.write(text);
      document.getElementById("chatbox").contentWindow.scrollByPages(1);
    }
  };

  exampleSocket.close();
