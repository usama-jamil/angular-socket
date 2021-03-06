const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

let count = 0;
io.on("connection", socket => {
  console.log("New Websocket connection");

  socket.emit("countUpdated", count);

  socket.on("increment",()=>{
      count++
        //  Emit Event to Current connection
      //   socket.emit("countUpdated",count)
        //  Emit Event to Every Single Connection
      io.emit("countUpdated",count)
  })
});

server.listen(port, () => {
  console.log(`Server in Running on ${port}`);
});
