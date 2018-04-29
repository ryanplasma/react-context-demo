import React, { Component } from "react";

import axios from 'axios'

export const GithubContext = React.createContext({
  user: "",
  repos: [],
  changeUser: () => {},
  fetchRepos: () => {}
});

export const GithubConsumer = GithubContext.Consumer;

export class GithubProvider extends Component {
  state = {
    user: "ryanplasma"
  };

  changeUser = user => {
    this.setState({
      user: user
    });
  };

  fetchRepos = async () => {
    const response = await axios.get(`https://api.github.com/users/${this.state.user}/repos`)
    this.setState({
      repos: response.data
    })
  };

  render() {
    return (
      <GithubContext.Provider
        value={{...this.state, changeUser: this.changeUser, fetchRepos: this.fetchRepos}}
      >
        {this.props.children}
      </GithubContext.Provider>
    );
  }
}
