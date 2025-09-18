

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './Components/FirstPage/FirstPage';
import Login from './Components/Register/Login';
import Register from './Components/Register/Register';
import EspaceAgent from './Components/Espace/Espace Agent/EspaceAgent';
import AgentDashboard from './Components/Espace/Espace Agent/AgentDashboard';
import Dossiers from './Components/Espace/Espace Agent/Dossier';

import EspaceClient from './Components/Espace/EspaceClient/EspaceClient'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Layout de l'espace agent */}
        <Route path="/espace-agent" element={<EspaceAgent />}>
          <Route index element={<AgentDashboard />} /> {/* Dashboard par défaut */}
         
        </Route>

<Route path="/espace_client" element={<EspaceClient />}>
         
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
