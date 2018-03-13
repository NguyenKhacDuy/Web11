const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('filePublic'));

app.get('/', (req, res) => {
    res.send("It's fisrt time I do this");
});

app.get('/flexbox', (req, res) => {
    res.sendFile(path.resolve(__dirname, './filePublic/notHelloWorld.html'));
});

app.get('/frontendpractice', (req, res) => {
    // res.sendFile(__dirname + '/filePublic/helloworld.html' );
    res.sendFile(path.resolve(__dirname, './filePublic/helloworld.html'));

});

app.listen(6996, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6996");
});