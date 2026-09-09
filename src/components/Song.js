import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <div className="song">
        <h2>{this.props.title}</h2>
        <p>Artista: {this.props.artist}</p>
        <p>Álbum: {this.props.album}</p>
        <p>Duración: {this.props.duration}</p>
      </div>
    );
  }
}

export default Song;