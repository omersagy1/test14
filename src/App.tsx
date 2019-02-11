import * as React from 'react';
import './App.css';

import { Model, Action, inc, dec } from './model';


export interface AppProps {
  model: Model;
  update: (action: Action) => () => void;
}

const App = (props: AppProps | null) => {

  if (props == null) {
    return <div> errored! </div>
  }

  return (
    <div className="App">
      <Tile />
      <Tile extra={"tile2"}/>
      <div> {props.model.count} </div>
      <div onClick={props.update(inc())}> inc </div>
      <div onClick={props.update(dec())}> dec </div>
    </div>
  );
}

const Tile = (props: {extra?: string}) => {
  let display = props.extra || "tile"
  return <div className="tile">{display}</div>;
};

export default App;
