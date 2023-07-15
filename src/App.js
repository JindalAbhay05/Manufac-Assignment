import React from 'react';
import FlavanoidsStats from "./components/FlavanoidsStat";
import GammaStats from './components/GamaStat';
import {data} from './utility/data/Wine-Data';
function App() {
  return (
    <>
      <div>
        <h1>Flavanoids Stats</h1>
        <FlavanoidsStats data={data}/>
      </div>
      <div>
        <h1>Gamma Stats</h1>
        <GammaStats data={data}/>
      </div>
    </>
  );
}

export default App;