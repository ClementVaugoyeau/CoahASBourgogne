import React from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBarContainer">

      <a><Link to="/">  Accueil  </Link></a>
      <a> <Link to="/PlayerTablePage"> Tableau joueurs </Link> </a>
      <a> <Link to="/InventoryPage"> Inventaire matériels </Link> </a>
      <a> <Link to="/InventoryPage"> Attestations </Link> </a>
      <a> <Link to="/InventoryPage"> Statistiques </Link> </a>
      <a> <Link to="/InventoryPage"> Agenda </Link> </a>
    
    </div>
  );
}

export default NavBar;
