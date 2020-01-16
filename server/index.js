var express = require('express');
var bodyParser = require('body-parser');
var playlistsRouter = require('./routers/playlists.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/radio-dj-playlist-builder', { useMongoClient: true })

var app = express();

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});

//API routes

//get names of all playlists

//get all songs in playlist
app.get('/alltracks', playlistsRouter)


//get duration

//get album art

//get genre

//add song to playlist
app.post('/newtrack', playlistsRouter)