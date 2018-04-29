import React, { Component } from "react";

export const ColorContext = React.createContext({
  color: "red",
  changeColor: () => {}
});

export const ColorConsumer = ColorContext.Consumer;

export class ColorProvider extends Component {
  state = {
    color: "red"
  };

  changeColor = color => {
    this.setState({
      color: color
    });
  };

  render() {
    return (
      <ColorContext.Provider
        value={{
          color: this.state.color,
          changeColor: this.changeColor
        }}
      >
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
