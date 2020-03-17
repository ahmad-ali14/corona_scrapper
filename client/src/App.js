import React from 'react';
import './App.css';
import World from './components/world';
import UK from './components/uk';
import Spain  from './components/Spain';


function App() {

  

  return (
    <div className="App">
    <h1 style={{ color: "red" }}> coronavirus Live Monitor </h1>
    <table className="table table-striped py-5">
  <thead>
    <tr>
      <th scope="col">country</th>
      <th scope="col">Confirmed</th>
      <th scope="col">recovered</th>
      <th scope="col">deths</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <World  />
    </tr>
    <tr>
      <UK />
    </tr>
    <tr>
      <Spain />
    </tr>

    
  </tbody>
</table>
   
    </div>
  );
}

export default App;
