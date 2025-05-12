import React from 'react';
import { RouterDataProvider } from './context/RoutersDataContext';
import { RouterFilterProvider } from './context/RoutersFilterContext';
import RouterList from './components/RouterList'; 
import RouterFilterControls from './components/RouterFilterControls';
import RouterDetails from './components/RouterDetails';
import './App.css';

interface Router {
  id: string;
  name: string;
  type: string;
  updatedAt: string;
}

function App() {
  const [open, setOpen] = React.useState(true);
  const [selectedRouter, setSelectedRouter] = React.useState<Router | null>(null);

  interface Router {
    id: string;
    name: string;
    type: string;
    updatedAt: string;
  }

  const handleModal = (router: Router): void => {
    if (!open) {
      setSelectedRouter(router);
      setOpen(true);
      return;
    }
    setSelectedRouter(null);
    setOpen(false);
  };

  return (
    <RouterDataProvider>
      <RouterFilterProvider>
      <div className="App-main">
        <h2 className="placeholder-title">DriveNet Routers</h2>
        <RouterFilterControls />
        <RouterList handleModal={() => selectedRouter && handleModal(selectedRouter)} />
        <RouterDetails open={false} handleClose={() => {selectedRouter && handleModal(selectedRouter)}} router={{ id: '', name: '', type: '', updatedAt: '' }} />
      </div>
      </RouterFilterProvider>
    </RouterDataProvider>
  );
}

export default App;
