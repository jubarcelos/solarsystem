import React from 'react';
import Header from './components/Header.js';
import SolarSystem from './components/SolarSystem.js';
import Title from './components/Title.js';


class App extends React.Component {
  render() {
    return (
      <>
        < Header />
        < SolarSystem />
        < Title />
      </>
    );
  }
}

export default App;
