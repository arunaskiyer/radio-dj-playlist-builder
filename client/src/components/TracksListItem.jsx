import React from 'react';

const TracksListItem = (props) => {
  var duration = props.duration/1000;
  var minutes = Math.floor(duration/ 60);
  var seconds = duration - minutes * 60;
  var finalTime = minutes+ ':'+seconds;
  return (
      <li>
        <div class="flex-container-interaction">
              <div class='spacer'>
              <div><img className='pic' src={props.albumArt}></img></div>
              <div class='stats'>{props.title}</div>
              <div class='stats'>{props.artist}</div>
              <div class='stats'>{props.genre}</div>
              <div class='stats'>{finalTime}</div>
              </div>
        </div>
      </li>
    );
  };
  
export default TracksListItem;