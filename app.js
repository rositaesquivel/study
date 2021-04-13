const express = require('express');

const app = express(); //Server - localhost - IPv4
const path = require('path');

app.listen(3000); //Port
console.log("Listening on port: 3000: http://localhost:3000");

app.get("/", (req, res) => {
    res.sendFile("./index.html", {root: __dirname});
}); //localhost:3000/ - root path

app.use('/static', express.static(path.join(__dirname, 'view')))
app.use('/css', express.static(path.join(__dirname, 'styles')));