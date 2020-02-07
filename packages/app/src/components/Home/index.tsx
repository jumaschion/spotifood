import React, { Component } from "react";

import Filter from "../Filter/Filter";
import PlaylistComponent from "../Playlist";

interface Playlist {
  items: any[]
}

interface HomeProps {
  accessToken: string
}

interface HomeState {
  playlists: Playlist[],
  filterString: string
}

class Home extends Component<HomeProps, HomeState> {
  state = {
    playlists: [],
    filterString: ""
  };

  componentDidMount() {
    const { accessToken } = this.props;

    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: "Bearer " + accessToken }
    })
    .then(response => response.json())
    .then((data: Playlist) =>
      this.setState({
        playlists: data.items.map(item => {
          // console.log(data.items)
          console.log({ item });
          return {
            ...item,
            // name: item.name,
            imageUrl: item.images[0].url,
            songs: []
          };
        })
      })
    );
  }

  render() {
    const { playlists, filterString } = this.state;
  
    const filteredPlaylist = playlists.filter(
      playlist => playlist.name.toLowerCase().includes(filterString.toLowerCase())
    );

    return (
      <div>
        <h1>Playlists</h1>
        <Filter
          onTextChange={text => {
            this.setState({ filterString: text });
          }}
        />
        { !filteredPlaylist.length ? (
          <div>
            No playlist to render :(
          </div>
        ) : filteredPlaylist.map(playlist => (
          <PlaylistComponent playlist={playlist} />
        ))}
      </div>
    );
  }
}
export default Home;
