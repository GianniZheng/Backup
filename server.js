var express = require('express')
var app = express()

const port = 5000;

app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/register", (req, res)=>{
    var username = req.body.username;
    var pass = req.body.pass;
    var email = req.body.email;

    if (length(pass) < 8){
        res.status(300);
        res.send("ERRORE: La password deve essere di almeno 8 caratteri");
    }
    else{
    }
})

app.listen(port, ()=>{
    console.log("App is listening on port: " + port);
});