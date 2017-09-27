import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

interface ChildLoaderState {
  Child?: React.SFC;
}

class ChildLoader extends React.Component<{}, ChildLoaderState> {
  state: ChildLoaderState = {};

  async componentWillMount() {
    const { default: Child } = await import('./Child');
    this.setState({ Child });
  }

  render() {
    const { Child } = this.state;
    if (Child) {
      return <Child />;
    } else {
      return <div>Loading ...</div>;
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ChildLoader />
      </div>
    );
  }
}

export default App;
