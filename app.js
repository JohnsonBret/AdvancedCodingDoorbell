var express = require("express");

var path = require('path');

var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, ()=>{
    console.log(`Server is started on 3000`);
});