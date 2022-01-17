import React, { Component } from "react";
import { robots } from "../robots";
import CardList from "../Card/CardList";
import SearchBox from "../Card/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
