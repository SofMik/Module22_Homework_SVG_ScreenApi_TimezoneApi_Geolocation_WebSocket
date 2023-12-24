document.addEventListener("DOMContentLoaded", function() {
  const wsUri = "wss://echo-ws-service.herokuapp.com/";
  const output = document.getElementById("output");
  const btnSend = document.querySelector('.j-btn-send');
  const btnGeo = document.querySelector('.j-btn-geo');
  const mapLink = document.querySelector('#map-link');

  let websocket;

  function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  websocket = new WebSocket(wsUri);
  websocket.onmessage = function(evt) {
    writeToScreen(
      `<span style="text-align: left;
        color: #333366;
        display: block;
        margin-left: 10px;">
        Server: ` + evt.data +'</span>'
    );
  };

  btnSend.addEventListener('click', () => {
    chat_section.style.display = "block";
    let inputText = document.querySelector('#input_text').value; 
      if (websocket.readyState === WebSocket.OPEN) {
        writeToScreen("Client: " + inputText);
        websocket.send(inputText);
        document.querySelector('#input_text').value = "";  
      } 
      else {
        console.log('WebSocket is not open. Ready state is: ' + websocket.readyState);
      } 
  });

  mapLink.href = '';
  mapLink.textContent = '';
  
  btnGeo.addEventListener('click', () => { 
    chat_section.style.display = "block";
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      //console.log(coords.latitude, coords.longitude);
      const mapLink = document.createElement('a');
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = 'Link to map';
      mapLink.target = '_blank';
      const inputText = mapLink.outerHTML;
        if (websocket.readyState === WebSocket.OPEN) {
          writeToScreen(inputText); 
        } 
        else {
          console.log('WebSocket is not open. Ready state is: ' + websocket.readyState);
        }
      });
    };
  });
});


  
   

