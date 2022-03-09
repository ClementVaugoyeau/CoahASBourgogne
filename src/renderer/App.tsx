import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import InventoryPage from 'page/InventoryPage';
import PlayerTablePage from 'page/PlayerTablePage';
import StatPage from 'page/StatPage';
import Home from 'page/HomePage';

import './App.scss';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlayerTablePage" element={<PlayerTablePage />} />
        <Route path="/InventoryPage" element={<InventoryPage />} />
        <Route path="/StatPage" element={<StatPage />} />
      </Routes>
    </Router>
  );
}
