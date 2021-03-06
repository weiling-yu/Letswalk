import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <MainComponent />
        </div>
    </BrowserRouter>
  );
}

export default App;
