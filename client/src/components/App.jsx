import React from 'react';
const axios = require('axios');
import Search from './Search.jsx'
import TracksList from './TracksList.jsx'
import BarChart from './BarChart.jsx'
import Axios from 'axios';
import './styles.css';
import * as d3 from 'd3';
import { throws } from 'assert';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tracks: [],
      data: [2,4,6],
      duration: 0,
      genres: '',
      artists: ['h', 't', 'e']
    };

  }

  componentDidMount() {
    this.getTracks();
  }

  addToList(info){
    Axios.get('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=205bc1df999d790b611b3f83c011527c&artist=' + info.artist + '&track='+ info.title + '&format=json')
            .then((song) => {
              info.duration = parseInt(song.data.track.duration);
              info.albumArt = song.data.track.album.image[1]['#text'];
              info.genre = song.data.track.toptags.tag[0].name;
              Axios.post('/newtrack', info)
                .then(function (response) {
                  location.reload();
                 })
               .catch(function (error) {
                  console.log('post error'); 
                  console.log(error);
                });
             })
            .catch((err) => {
                console.error(err);
            })
  }

  getTracks(){
    Axios.get('/alltracks')
      .then((tracks) => {
        var newDuration = 0;
        var newGenres = [];
        var newGenreStr = '';
        var newArtists = [];
        var newCount = [];

        for(var i = 0; i < tracks.data.length; i++){
          newDuration += tracks.data[i].duration;
        }

        for(var i = 0; i < tracks.data.length; i++){
          if(!newGenres.includes(tracks.data[i].genre)){
            newGenres.push(tracks.data[i].genre)
            newGenreStr += tracks.data[i].genre + '|||';
          }
        }

        for(var i = 0; i < tracks.data.length; i++){
          if(!newArtists.includes(tracks.data[i].artist)){
            newArtists.push(tracks.data[i].artist)
            newCount.push(1);
          } else {
            let artist = tracks.data[i].artist;
            let search = (artist) => {
              for(var j = 0; j < tracks.data.length; j++){
                if(artist === tracks.data[j].artist) {
                  return true;
                }
                if(j === tracks.data.length-1) {
                  return false;
                }
              }
            }
            newCount[newArtists.findIndex(search)] += 1;
          }
        }

        this.setState({
          tracks: tracks.data,
          data: newCount,
          duration: newDuration,
          genres: newGenreStr
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    var duration = this.state.duration/1000;
    var minutes = Math.floor(duration/ 60);
    var seconds = duration - minutes * 60;
    var finalTime = minutes+ ':'+seconds; 
    console.log(this.state.data) 
      return(
        <div class='holder'>
          <BarChart data={this.state.data} artists={this.state.artists}/>
          <div class='playlist'>
            <div class='title'>PLAYLIST BUILDER</div>
            <Search addToList = {this.addToList}/>
            PLAYLIST
            <div>Current duration: {finalTime}</div>
            <div>Genres: {this.state.genres}</div>
            <TracksList trackData={this.state.tracks}/>
        </div>
      </div>
        
      );
  }
}

export default App;