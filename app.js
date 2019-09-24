var express = require("express");

var playSound = require('play-sound')(opts = {});
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

var server = app.listen(3000, ()=>{
    console.log(`Server is started on 3000`);
});

var io = require('socket.io').listen(server);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

// 1) Write a GET route for '/upstairs'
app.get('/upstairs', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'upstairs.html'));
});

// 2) Send a Status 200
// 3) Send a upstairs.html file

app.post('/ring', (req, res)=>{
    // console.log(req);
    console.log(`Got your post -> Ring ${req.body.userName}`);

    playSound.play('./public/sounds/doorbell-7.mp3', (err)=>{
        if(err) throw err;
    });

    io.emit('arrival',{
        studentName: req.body.userName
    });


});

io.on('connection', function(socket){
    console.log('a user connected');
  });
