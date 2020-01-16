var mongoose = require('mongoose');

var trackSchema = mongoose.Schema({
  title: String,
  artist: String,
  duration: Number,
  albumArt: String,
  genre: String
})

var playlistSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  tracks: [trackSchema]
})

var TrackModel = mongoose.model('Track', trackSchema);
var PlaylistModel = mongoose.model('Playlist', playlistSchema);

function findAll(callback) {
  TrackModel.find({}, callback);
};

function findID(id, callback) {
  PlaylistModel.find({id: id}, callback);
}

function findName(name, callback) {
  PlaylistModel.find({name: name}, callback);
}

function insertOne(track, callback) {
  TrackModel.create(track, callback);
}

exports.findAll = findAll;
exports.findID = findID;
exports.findName = findName;
exports.insertOne = insertOne;