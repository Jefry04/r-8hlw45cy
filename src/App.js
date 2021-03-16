import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      terms: false,
      showing: false,
    };
  }

  showInfo(event) {
    this.setState({
      terms: event.target.checked,
      showing: !this.state.showing,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <label>
          <input
            type="checkbox"
            checked={this.state.terms}
            onClick={this.showInfo.bind(this)}
          />
          Mostrar información importante
        </label>
        {this.state.showing ? <p>This is visible</p> : null}
      </div>
    );
  }
}

export default App;
