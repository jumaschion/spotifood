import React, { Component } from "react";

import { PlaylistStyle } from "./PlaylistStyle";

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist;
    return (
      <PlaylistStyle>
        <h3>{playlist.name}</h3>
        <a
          href="https://open.spotify.com/user/spotify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playlist.imageUrl} alt="" style={{ width: "60px" }} />
        </a>
        <ul>
          {playlist.songs.map(song => (
            <li>{song.name}</li>
          ))}
        </ul>
      </PlaylistStyle>
    );
  }
}
export default Playlist;
