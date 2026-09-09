import React, { Component } from "react";
import Header from "./components/Header";
import Song from "./components/Song";
import "./app.css";

class App extends Component {
  
  componentDidMount() {
    console.log("La app se ha cargado correctamente");
  }
  render() {
    return (
      <div>
        <Header />

        <main>
          <h2>Mis canciones</h2>

          <Song
            title="Ameri"
            artist="Duki"
            album="Ameri"
            duration="3:19"
          />

          <Song
            title="Goteo"
            artist="Duki"
            album="Super Sangre Joven"
            duration="3:05"
          />

          <Song
            title="Antes de Perderte"
            artist="Duki"
            album="Antes de Ameri"
            duration="2:46"
          />
        </main>
      </div>
    );
  }
}

export default App;