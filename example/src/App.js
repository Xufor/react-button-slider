import React from 'react';
import Slider from './components/slider';
import Bar from './components/bar';
import './App.css';

function App() {
  return (
    <div className='App'>
        <Slider 
          targetComponent={Bar}
          def={330}
          dur={1.5}
        />
    </div>
  );
}

export default App;
