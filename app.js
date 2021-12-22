var path = require('path');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

server.listen(3000);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/submit-student-data', (req, res) => {
	res.send('POST Request');
});

app.put('/update-data', (req, res) => res.send('PUT Request'));

app.delete('/delete-data', (req, res) => res.send('DELETE Request'));

