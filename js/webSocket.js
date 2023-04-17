
const exampleSocket = new WebSocket(
    "wss://www.example.com/socketserver",
    "protocolOne"
  );
exampleSocket.send("Here's some text that the server is urgently awaiting!");


exampleSocket.onopen = (event) => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
    console.log(event.data);

  };

 
  
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