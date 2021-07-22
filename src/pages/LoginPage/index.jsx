import React, {Component} from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     username: '',
     password: '',
     remember:false,
    };
  }

  render() {
    return (
      <div>
        login Page
      </div>
    )
  }
}