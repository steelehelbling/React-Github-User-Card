import React from "react";
import FollowerCard from "./FollowerCard";
import UserCard from "./UserCard";
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      avatar: [],
      location: [],
      public_repos: [],
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/steelehelbling")
      .then((res) => res.json())
      .then((userData) => {
        console.log("User Data", userData);
        this.setState({ name: userData.name });
        this.setState({ avatar: userData.avatar_url });
        this.setState({ location: userData.location });
        this.setState({ public_repos: userData.public_repos });
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <div className='App'>
        <UserCard
          name={this.state.name}
          avatar={this.state.avatar}
          location={this.state.location}
          public_repos={this.state.public_repos}/>
        <FollowerCard />
      </div>
    );
  }
}

export default App;
