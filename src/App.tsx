import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Model } from './model';


export interface Props {
  model: Model;
  increment: () => void;
  decrement: () => void;
}

const App = (props: Props | null) => {

  if (props == null) {
    return <div> errored! </div>
  }

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
      <div> {props.model.count} </div>
      <div onClick={props.increment}> inc </div>
      <div onClick={props.decrement}> dec </div>
    </div>
  );
}

const Tile = (props: {extra?: string}) => {
  let display = props.extra || "tile"
  return <div className="tile">{display}</div>;
};

export default App;
