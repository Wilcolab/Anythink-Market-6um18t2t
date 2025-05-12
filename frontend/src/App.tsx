import React from 'react';
import { RouterDataProvider } from './context/RoutersDataContext';
import RouterList from './components/RouterList'; 
import RouterFilterControls from './components/RouterFilterControls';
import './App.css';

function App() {
  return (
    <RouterDataProvider>
      <div className="App-main">
        <h2 className="placeholder-title">Sky Rocket Routers</h2>
        <RouterFilterControls />
        <RouterList />
      </div>
    </RouterDataProvider>
  );
}

export default App;
