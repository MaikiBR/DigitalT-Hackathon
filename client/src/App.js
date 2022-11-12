import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './Pages/Main';
import Dashboard from './Pages/Dashboard';
import Catalogo from './Pages/Catalogo';
import Badge from './Pages/Badge';

import SideBar from "./Components/Sidebar";
import { useState } from 'react';


function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <BrowserRouter>
    <SideBar 
      onCollapse={(inactive) => {
        setInactive(inactive);
      }}
    />
    <div className={`container ${inactive ? 'inactive' : ''}`}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/catalogo" element={<Catalogo />} />
        <Route exact path="/badge" element={<Badge />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
