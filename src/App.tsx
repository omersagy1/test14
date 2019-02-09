import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Tile />
        <Tile extra={"tile2"}/>
      </div>
    );
  }
}

const Tile = (props: {extra?: string}) => {
  let display = props.extra || "tile"
  return <div className="tile">{display}</div>;
};

export default App;
