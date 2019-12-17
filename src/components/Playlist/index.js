import React, { Component } from 'react'

import { PlaylistStyle } from './ButtonStyle';

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <PlaylistStyle>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song => 
            <li>{song.name}</li>
          )}
        </ul>
      </PlaylistStyle>
    );
  }
}
export default  Playlist