import React, { Component } from "react";
import GithubStats from './components/GithubStats'

import randomColor from 'randomcolor'

import {
  ColorProvider,
  ColorConsumer
} from "./context/ColorContext";

import {
  GithubProvider
} from "./context/GithubContext"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Color Demo</h1>
        <ColorProvider>
          <ColorConsumer>
            {({ color, changeColor }) => (
              <div>
                <p style={{ color: color }}>This should be {color}</p>
                <button onClick={() => changeColor(randomColor())}>
                  Change Color
                </button>
              </div>
            )}
          </ColorConsumer>
        </ColorProvider>
        <h1>Github Demo</h1>
        <GithubProvider>
          <GithubStats />
        </GithubProvider>
      </div>
    );
  }
}

export default App;
