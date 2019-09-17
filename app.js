var express = require("express");

var player = require('play-sound')(opts = {});
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.get('/upstairs', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'upstairs.html'));
});

app.post('/ring', (req, res)=>{
    // console.log(req);
    console.log(`Got your post -> Ring ${req.body.userName}`);

    player.play('./public/sounds/doorbell-7.mp3', (err)=>{
        if(err) throw err;
    });
});

app.listen(3000, ()=>{
    console.log(`Server is started on 3000`);
});