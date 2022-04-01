import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment inverted vertical textAlign="center">
          <Container as="nav">
            <Header inverted as="h1">
              AIM
            </Header>
            <Menu borderless compact inverted>
              <Menu.Item active>Home</Menu.Item>
              <Menu.Item>Features</Menu.Item>
              <Menu.Item>Log In</Menu.Item>
            </Menu>
          </Container>
          <Container className="content">
            <Header inverted as="h1">
              Cover your page.
            </Header>
            <p>
              AIM is an All in One media tracker, to help you keep track of games, shows and movies across all of your subscription services and libraries!
            </p>
            <Button size="huge">Sign Up!</Button>
          </Container>
          <Segment inverted vertical as="footer">
            Cover template for <a href="http://semantic-ui.com">AIM</a>,
            by{" "}
            <a href="https://github.com/semantic-ui-forest">
              @Semantic-UI-Forest
            </a>
            .
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default App;