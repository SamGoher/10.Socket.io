// application requirements
const express = require(`express`);
const app = express();
const http = require(`http`);
const path = require(`path`);
const {ioFunction} = require(`./utils/io`);
const socketio = require(`socket.io`);
const server = http.createServer(app);
const io = socketio(server);

// setting port
const port = process.env.PORT || 3000;

// set static folder
app.use(express.static(`./public`));

// serving text in incoming requests
app.use(express.urlencoded({extended: false}));

// handling bidirectional connection
io.on(`connection`, ioFunction(io));

app.get(`/`, (req, res, next) => {
  res.sendFile(path.join(__dirname, `./views/index.html`));
});

// run server
server.listen(port, () => {
  console.log(`server listening to port ${port} ...`);
});