import React, { Component } from "react";

import { GithubConsumer } from "../context/GithubContext";

export default class GithubStats extends Component {
  state = {
    newUser: ''
  }

  handleChange = e => {
    this.setState({
      newUser: e.target.value
    })
  }

  render() {
    return (
      <GithubConsumer>
        {({user, repos, changeUser, fetchRepos}) => (
          <div>
            <p>The current user is: <b>{user}</b></p>
            <input type="text" value={this.state.newUser} onChange={this.handleChange} /> 
            <button onClick={() => changeUser(this.state.newUser)}>
              Change User
            </button>
            <br />
            <br />
            <button onClick={fetchRepos}>
              Fetch repos
            </button>
            {repos ? (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id}>{repo.full_name}</li>
                ))}
              </ul>
            ) : (
              <p>Please Fetch Repos</p>
            )}
          </div>
        )}
      </GithubConsumer>
    )
  }
}
