//this is the entry point for the whole application

var express = require("express");

var app = express();

var count = 0;

app.get("/", (req, res) =>{
    count++;
    res.send("Hello world this is your unity webgl game");
});

app.get("/user/:id", (req, res) =>{

    var dummyData = {
        id: req.params["id"],
        username: "pie huhuh",
        wins: 18,
        losses: 666,
    }
    
    res.send(dummyData);
});

app.listen(8000, ()=>{
    console.log("Server has started");
});