import React from 'react';
import TracksListItem from './TracksListItem.jsx'

const TracksList = (props) => {
  return (
      <ol>
          {props.trackData.map(item => <TracksListItem title={item.title} artist={item.artist} duration={item.duration} albumArt={item.albumArt} genre={item.genre}/>)}
      </ol>
  )
}

export default TracksList;